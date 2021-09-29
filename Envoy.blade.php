#
# Copyright (C) 2021 Intel Corporation
# SPDX-License-Identifier: MIT
#

@servers(['staging' => $stagingSshHost])

@setup
    $project_dir = 'i-iot-portal';
    $release = date('YmdHis');
@endsetup

@story('deploy')
    setup_build_run
@endstory

@task('setup_build_run')
    ROOT_DIR=`pwd`
    PROJECT_DIR="$ROOT_DIR/i-iot-portal"
    OUTPUT_DIR="$ROOT_DIR/iotportaldata"
    ENV_DIR="$OUTPUT_DIR/env"
    echo $ROOT_DIR
    echo $PROJECT_DIR
    echo $OUTPUT_DIR
    echo $ENV_DIR


    # Shut down deployment
    echo 'Shutting down existing deployment if exists'
    if [ -d "$PROJECT_DIR" ]
    then
        cd $PROJECT_DIR
        if [ $(docker-compose -f docker-compose.staging.yml --env-file ./.env.staging ps | wc -l) -gt 2 ]
        then
            echo 'Shutting down existing deployment'
            docker-compose -f docker-compose.staging.yml --env-file ./.env.staging down
        fi
    fi


    # Delete existing project folder
    echo 'Deleting existing project folder if exists'
    if [ -d "$PROJECT_DIR" ]
    then
        echo 'Deleting existing project folder'
        rm -rf $PROJECT_DIR
    fi


    # Clone repository
    echo 'Cloning repository'
    cd $ROOT_DIR
    git clone --depth 1 {{ $projectRepository }}
    cd $PROJECT_DIR
    git reset --hard {{ $commit }}


    # Delete iotportaldata directory
    echo 'Deleting existing iotportaldata directory if exists'
    if [ -d "$OUTPUT_DIR" ]
    then
        echo 'Deleting existing iotportaldata directory'
        rm -rf $OUTPUT_DIR
    fi


    #Create iotportaldata directory
    echo 'Creating new iotportaldata directories'
    mkdir -p $OUTPUT_DIR/app/storage/app
    mkdir -p $OUTPUT_DIR/app/storage/framework
    mkdir -p $OUTPUT_DIR/ca-certificates
    mkdir -p $OUTPUT_DIR/env
    mkdir -p $OUTPUT_DIR/logs/app
    mkdir -p $OUTPUT_DIR/logs/nginx
    mkdir -p $OUTPUT_DIR/logs/vernemq
    mkdir -p $OUTPUT_DIR/logs/mysql
    mkdir -p $OUTPUT_DIR/mysql/data
    mkdir -p $OUTPUT_DIR/nginx/sites-available
    mkdir -p $OUTPUT_DIR/ssl
    mkdir -p $OUTPUT_DIR/vernemq/etc
    mkdir -p $OUTPUT_DIR/vernemq/data
    mkdir -p $OUTPUT_DIR/redis/data
    mkdir -p $OUTPUT_DIR/redis/conf


    # Create uid.env
    echo 'Creating uid.env'
    if ! grep -q "^LOCAL_UID=" $ENV_DIR/uid.env 2>/dev/null || ! grep -q "^LOCAL_GID=" $ENV_DIR/uid.env 2>/dev/null
    then
        LUID="LOCAL_UID=`id -u $USER`"
        [ "$LUID" == "LOCAL_UID=0" ] && LUID="LOCAL_UID=65534"
        LGID="LOCAL_GID=`id -g $USER`"
        [ "$LGID" == "LOCAL_GID=0" ] && LGID="LOCAL_GID=65534"
        echo $LUID >$ENV_DIR/uid.env
        echo $LGID >>$ENV_DIR/uid.env
    fi
    echo 'Creating uid.env completed'


    # Build artifacts
    echo 'Building artifacts'
    cd $PROJECT_DIR
    sed -i 's~server_name.*~server_name {{ $serverName }};~g' docker-compose/nginx/sites/default.conf
    sed -i 's~APP_HOST=.*~APP_HOST={{ $appHost }}~g' .env.staging
    sed -i 's~DB_PASSWORD=.*~DB_PASSWORD={{ $dbPassword }}~g' .env.staging
    sed -i 's~MQTT_EXTERNAL_ENDPOINT=.*~MQTT_EXTERNAL_ENDPOINT={{ $mqttExternalEndpoint }}~g' .env.staging
    # sed -i 's~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    # sed -i 's~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    # sed -i 's~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    docker build --no-cache -t inteliotportal-build --build-arg HOSTNAME=192.168.0.106 -f docker-compose/build/Dockerfile .
    docker run --rm --name setup -v $OUTPUT_DIR:/iotportaldata --env-file $ENV_DIR/uid.env inteliotportal-build


    # Start deployment
    echo "Starting deployment ({{ $release }})"
    cd $PROJECT_DIR
    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging build --no-cache
    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging up -d --force-recreate
@endtask