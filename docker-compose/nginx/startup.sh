#!/bin/bash

#if [ ! -f /etc/nginx/ssl/default.crt ]; then
#    openssl req -new -newkey rsa:2048 -nodes -out localhost.csr -keyout localhost.key -subj "/C=US/ST=Oregon/L=Oregon/O=default/OU=default/CN=localhost"
##    openssl genrsa -out "/etc/nginx/ssl/default.key" 2048
##    openssl req -new -key "/etc/nginx/ssl/default.key" -out "/etc/nginx/ssl/default.csr" -subj "/CN=host.docker.internal/O=default/C=US"
##    openssl x509 -req -days 365 -in "/etc/nginx/ssl/default.csr" -signkey "/etc/nginx/ssl/default.key" -out "/etc/nginx/ssl/default.crt"
#    chmod 644 /etc/nginx/ssl/localhost.key
#fi

# Start crond in background
crond -l 2 -b

# Start nginx in foreground
nginx