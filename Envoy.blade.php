@servers(['staging' => $stagingSshHost])

@setup
    $repository = '{{ $projectRepository }}';
    $project_dir = 'i-iot-portal';
    $release = date('YmdHis');
@endsetup

@story('deploy')
    delete_existing_project
    clone_repository
    build_artifacts
    shut_down_existing_containers
    start_containers
@endstory

@task('delete_existing_project')
    echo 'Deleting existing project folder'
    rm -rf {{ $project_dir }}
@endtask

@task('clone_repository')
    echo 'Cloning repository'
    git clone --depth 1 {{ $repository }}
    cd {{ $project_dir }}
    git reset --hard {{ $commit }}
@endtask

@task('build_artifacts')
    echo 'Building artifacts'
    cd {{ $project_dir }}
    sed -i 's~server_name mqtthost~server_name {{ $mqttHost }}~g' docker-compose/nginx/sites/default.conf
    sed -i 's~server_name localhost~server_name {{ $serverName }}~g' docker-compose/nginx/sites/default.conf
    sed -i 's~allow 127.0.0.1~allow {{ $unblockIp }}~g' docker-compose/nginx/sites/default.conf
    sed -i 's~allow 127.0.0.2~allow {{ $serverIp }}~g' docker-compose/nginx/sites/default.conf
    sed -i 's~APP_URL=.*~APP_URL={{ $appUrl }}~g' .env.staging
    sed -i 's~DB_PASSWORD=.*~DB_PASSWORD={{ $dbPassword }}~g' .env.staging
    sed -i 's~MQTT_HOST=.*~MQTT_HOST={{ $mqttHost }}~g' .env.staging
    cp .env.staging .env
    echo '.env Content'
    head -10 .env
    echo 'Deleting old JS files'
    rm public/js/*.js
    rm public/js/*.txt
    echo 'Downloading NodeJS'
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    echo 'Building JS files'
    npm ci
    npm rebuild node-sass
    npm run production
@endtask

@task('shut_down_existing_containers')
    echo "Shutting down existing deployment"
    cd {{ $project_dir }}
    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging down
@endtask

@task('start_containers')
    echo "Starting deployment ({{ $release }})"
    cd {{ $project_dir }}
    docker-compose -f docker-compose.staging.yml --env-file ./.env.staging up -d --force-recreate --build
@endtask


















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