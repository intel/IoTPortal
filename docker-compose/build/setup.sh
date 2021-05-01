#!/bin/bash

cp -r /certs/. /iotportaldata/ca-certificates

cp -r /certs/. /iotportaldata/ssl

cp /var/www/docker-compose/nginx/nginx.conf /iotportaldata/nginx

cp -r /var/www/docker-compose/nginx/sites/* /iotportaldata/nginx/sites-available

cp /var/www/.env /iotportaldata/env