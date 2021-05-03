#!/bin/bash

cp -r /certs/* /iotportaldata/ca-certificates

cp -r /certs/* /iotportaldata/ssl

cp /var/www/docker-compose/nginx/nginx.conf /iotportaldata/nginx

cp -r /var/www/docker-compose/nginx/sites/* /iotportaldata/nginx/sites-available

cp -r /var/www/storage/app/* /iotportaldata/app/storage/app

cp -r /var/www/storage/framework/* /iotportaldata/app/storage/framework

cp /var/www/.env /iotportaldata/env

chown -R $LOCAL_UID:$LOCAL_GID /iotportaldata
