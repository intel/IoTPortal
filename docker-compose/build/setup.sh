#!/bin/bash

cp /certs /iotportaldata/ca-certificates

cp /certs /iotportaldata/ssl

cp /var/www/docker-compose/nginx/nginx.conf /iotportaldata/nginx

cp /var/www/docker-compose/nginx/sites-available /iotportaldata/nginx/sites-available

cp /var/www/.env /iotportaldata/env/.env