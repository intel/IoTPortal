#!/usr/bin/env bash

OUTPUT_DIR="/iotportaldata"
ENV_DIR="$OUTPUT_DIR/env"
UID_FILE="$ENV_DIR/uid.env"

cp -rn /certs/. /iotportaldata/ca-certificates

cp -rn /certs/. /iotportaldata/ssl

cp -n /var/www/docker-compose/nginx/nginx.conf /iotportaldata/nginx

cp -rn /var/www/docker-compose/nginx/sites/. /iotportaldata/nginx/sites-available

cp -rn /var/www/storage/app/. /iotportaldata/app/storage/app

cp -rn /var/www/storage/framework/. /iotportaldata/app/storage/framework

cp -n /var/www/.env /iotportaldata/env

cp -rn /vernemq/log/. /iotportaldata/logs/vernemq

cp -rn /vernemq/data/. /iotportaldata/vernemq/data

cp -rn /vernemq/etc/. /iotportaldata/vernemq/etc

if [ ! -e "$UID_FILE" ] ; then
    touch "$UID_FILE"
fi

if [ "$LOCAL_UID" == "" ] || [ "$LOCAL_GID" == "" ]
then
    LOCAL_UID="65534"
    LOCAL_GID="65534"
fi

chown -R $LOCAL_UID:$LOCAL_GID /iotportaldata
