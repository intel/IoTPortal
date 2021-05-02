@servers(['staging' => $stagingSshHost])

@setup
    $project_dir = 'i-iot-portal';
    $release = date('YmdHis');
@endsetup

@story('deploy')
    shut_down_existing_containers_and_delete_project
    clone_repository_and_create_iotportaldata_dir
    setup_build_run
@endstory

@task('shut_down_existing_containers_and_delete_project')
    # Shut down deployment
    echo 'Shutting down existing deployment if exists'
    if [ -d {{ $project_dir }} ]
    then
        echo 'Shutting down existing deployment'
        cd {{ $project_dir }}
        docker-compose -f docker-compose.staging.yml --env-file ./.env.staging down
    fi


    # Delete existing project folder
    echo 'Deleting existing project folder if exists'
    if [ -d {{ $project_dir }} ]
    then
        echo 'Deleting existing project folder'
        rm -rf {{ $project_dir }}
    fi
@endtask

@task('clone_repository_and_create_iotportaldata_dir')
    # Clone repository
    echo 'Cloning repository'
    git clone --depth 1 {{ $projectRepository }}
    cd {{ $project_dir }}
    git reset --hard {{ $commit }}


    # Delete iotportaldata directory
    echo 'Deleting existing iotportaldata directory if exists'
    if [ -d 'iotportaldata' ]
    then
        echo 'Deleting existing iotportaldata directory'
        rm -rf iotportaldata
    fi


    #Create iotportaldata directory
    echo 'Creating new iotportaldata directories'
    mkdir -p iotportaldata/app/storage/app
    mkdir -p iotportaldata/app/storage/framework
    mkdir -p iotportaldata/ca-certificates
    mkdir -p iotportaldata/env
    mkdir -p iotportaldata/logs/app
    mkdir -p iotportaldata/logs/nginx
    mkdir -p iotportaldata/mysql/data
    mkdir -p iotportaldata/nginx/sites-available
    mkdir -p iotportaldata/ssl
@endtask


@task('setup_build_run')
    # Create uid.env
    echo 'Creating uid.env'
    OUTPUT_DIR="$( cd iotportaldata && pwd )"
    echo $OUTPUT_DIR
    ENV_DIR="$OUTPUT_DIR/env"
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
    cd {{ $project_dir }}
    sed -i 's~server_name localhost host.docker.internal~server_name {{ $serverName }}~g' docker-compose/nginx/sites/default.conf
    sed -i 's~APP_URL=.*~APP_URL={{ $appUrl }}~g' .env.staging
    sed -i 's~DB_PASSWORD=.*~DB_PASSWORD={{ $dbPassword }}~g' .env.staging
    sed -i 's~MQTT_HOST=.*~MQTT_HOST={{ $mqttHost }}~g' .env.staging
    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging
    docker build --no-cache -t inteliotportal-build -f docker-compose/build/Dockerfile .
    docker run --rm --name setup -v $OUTPUT_DIR:/iotportaldata --env-file $ENV_DIR/uid.env inteliotportal-build


    # Start deployment
    echo "Starting deployment ({{ $release }})"
    cd {{ $project_dir }}
    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging up -d --force-recreate --build
@endtask























{{--Version 2--}}

{{--@servers(['staging' => $stagingSshHost])--}}

{{--@setup--}}
{{--    $project_dir = 'i-iot-portal';--}}
{{--    $release = date('YmdHis');--}}
{{--@endsetup--}}

{{--@story('deploy')--}}
{{--    delete_existing_project--}}
{{--    clone_repository--}}
{{--    build_artifacts--}}
{{--    shut_down_existing_containers--}}
{{--    start_containers--}}
{{--@endstory--}}

{{--@task('delete_existing_project')--}}
{{--    echo 'Deleting existing project folder'--}}
{{--    rm -rf {{ $project_dir }}--}}
{{--@endtask--}}

{{--@task('clone_repository')--}}
{{--    echo 'Cloning repository'--}}
{{--    git clone --depth 1 {{ $projectRepository }}--}}
{{--    cd {{ $project_dir }}--}}
{{--    git reset --hard {{ $commit }}--}}
{{--@endtask--}}

{{--@task('build_artifacts')--}}
{{--    echo 'Building artifacts'--}}
{{--    cd {{ $project_dir }}--}}
{{--    sed -i 's~server_name localhost host.docker.internal~server_name {{ $serverName }}~g' docker-compose/nginx/sites/default.conf--}}
{{--    #sed -i 's~allow 127.0.0.1~allow {{ $unblockIp }}~g' docker-compose/nginx/sites/default.conf--}}
{{--    #sed -i 's~allow 127.0.0.2~allow {{ $serverIp }}~g' docker-compose/nginx/sites/default.conf--}}
{{--    sed -i 's~APP_URL=.*~APP_URL={{ $appUrl }}~g' .env.staging--}}
{{--    sed -i 's~DB_PASSWORD=.*~DB_PASSWORD={{ $dbPassword }}~g' .env.staging--}}
{{--    sed -i 's~MQTT_HOST=.*~MQTT_HOST={{ $mqttHost }}~g' .env.staging--}}
{{--    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_REGISTER_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging--}}
{{--    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_SUBSCRIBE_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging--}}
{{--    sed -i 's~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT=.*~VMQ_WEBHOOKS_AUTH_ON_PUBLISH_ENDPOINT="${MIX_API_ENDPOINT}/mqtt/endpoint"~g' .env.staging--}}
{{--    docker build -t inteliotportal-build -f docker-compose/build/Dockerfile .--}}
{{--    #cp .env.staging .env--}}
{{--    #echo '.env Content'--}}
{{--    #head -10 .env--}}
{{--    #echo 'Deleting old JS files'--}}
{{--    #rm public/js/*.js--}}
{{--    #rm public/js/*.txt--}}
{{--    #echo 'Downloading NodeJS'--}}
{{--    #curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash ---}}
{{--    #sudo apt-get install -y nodejs--}}
{{--    #echo 'Building JS files'--}}
{{--    #npm ci--}}
{{--    #npm rebuild node-sass--}}
{{--    #npm run production--}}
{{--@endtask--}}

{{--@task('shut_down_existing_containers')--}}
{{--    echo "Shutting down existing deployment"--}}
{{--    cd {{ $project_dir }}--}}
{{--    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging down--}}
{{--@endtask--}}

{{--@task('start_containers')--}}
{{--    echo "Starting deployment ({{ $release }})"--}}
{{--    cd {{ $project_dir }}--}}
{{--    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging up -d --force-recreate --build--}}
{{--@endtask--}}

















{{--Version 1--}}

{{--@servers(['web' => 'root@174.138.35.53'])--}}
{{----}}
{{--@setup--}}
{{--    $repository = 'git@gitlab.com:desmondsow/i-iot-portal.git';--}}
{{--    $releases_dir = '/var/www/app/releases';--}}
{{--    $app_dir = '/var/www/app';--}}
{{--    $release = date('YmdHis');--}}
{{--    $new_release_dir = $releases_dir .'/'. $release;--}}
{{--@endsetup--}}

{{--@story('deploy')--}}
{{--    clone_repository--}}
{{--    run_composer--}}
{{--    update_symlinks--}}
{{--@endstory--}}

{{--@task('clone_repository')--}}
{{--    echo 'Cloning repository'--}}
{{--    [ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}--}}
{{--    git clone --depth 1 {{ $repository }} {{ $new_release_dir }}--}}
{{--    cd {{ $new_release_dir }}--}}
{{--    git reset --hard {{ $commit }}--}}
{{--@endtask--}}

{{--@task('run_composer')--}}
{{--    echo "Starting deployment ({{ $release }})"--}}
{{--    cd {{ $new_release_dir }}--}}
{{--    composer install --prefer-dist --no-scripts -q -o--}}
{{--@endtask--}}

{{--@task('update_symlinks')--}}
{{--    echo "Linking storage directory"--}}
{{--    rm -rf {{ $new_release_dir }}/storage--}}
{{--    ln -nfs {{ $app_dir }}/storage {{ $new_release_dir }}/storage--}}

{{--    echo 'Linking .env file'--}}
{{--    ln -nfs {{ $app_dir }}/.env {{ $new_release_dir }}/.env--}}

{{--    echo 'Linking current release'--}}
{{--    ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current--}}
{{--@endtask--}}