FROM php:fpm AS inteliotportal-build

# Install PHP and composer dependencies
RUN apt update && apt install -qq -y \
    git \
    curl \
    libmcrypt-dev \
    libjpeg-dev \
    libpng-dev \
    libonig-dev \
    libfreetype6-dev \
    libxml2-dev \
    libbz2-dev \
    libzip-dev \
    zip \
    unzip

# Clear out the local repository of retrieved package files
RUN apt clean && rm -rf /var/lib/apt/lists/*

RUN if [ -n ${http_proxy} ]; then \
    # set pecl to using http proxy
    pear config-set http_proxy ${http_proxy:-""} \
;fi

# Install PHP extensions
RUN pecl install -o -f redis \
            && rm -rf /tmp/pear \
            && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip \
            && docker-php-ext-enable redis

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install NodeJS
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -

RUN apt install -y nodejs

RUN mkdir /certs

COPY docker-compose/build/certificate.conf /certs

WORKDIR /certs

ARG HOSTNAME=192.168.0.106

SHELL ["/bin/bash", "-c"]

RUN sed -i "s~CN =.*~CN = $HOSTNAME~g" certificate.conf

RUN sed -i "s~DNS.1 =.*~DNS.1 = $HOSTNAME~g" certificate.conf

RUN sed -i "s~IP.1 =.*~IP.1 = $HOSTNAME~g" certificate.conf

# Generate rootCA.key (root CA private key) and rootCA.crt (root CA certficate)
RUN openssl req \
        -new -x509 -subj "/C=US/ST=Oregon/L=Oregon/O=Intel/OU=Intel Corporation/CN=Intel CA" \
        -keyout rootCA.key -out rootCA.crt -days 1024 -passout pass:extraconfidential

# Create a certificate key (Done for each server)
RUN openssl genrsa -out localhost.key 2048

# Create the signing certificate signing request(csr)
RUN openssl req -new -sha256 \
        -key localhost.key \
        -subj "/C=US/ST=Oregon/L=Oregon/O=Intel/OU=Intel Corporation/CN=$HOSTNAME" \
        -reqexts SAN \
        -config <(cat /etc/ssl/openssl.cnf <(printf "\n[SAN]\nsubjectAltName=DNS:$HOSTNAME,DNS:localhost,DNS:app,DNS:mysql,DNS:nginx,DNS:vernemq,DNS:redis,DNS:horizon,DNS:phpmyadmin,DNS:host.docker.internal,IP:$HOSTNAME,IP:127.0.0.1,IP:192.168.1.1")) \
        -out localhost.csr

# Verify the csr's content
#RUN openssl req -in localhost.csr -noout -text

# Generate the certificate using the mydomain csr and key along with the CA Root key
RUN openssl x509 \
        -req -in localhost.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out localhost.crt \
        -days 365 -sha256 -passin pass:extraconfidential \
        -extensions req_ext -extfile certificate.conf

# Verify the certificate's content
#RUN openssl x509 -in localhost.crt -text -noout

SHELL ["/bin/sh", "-c"]

RUN rm -r /var/www/*

COPY . /var/www

WORKDIR /var/www

RUN cp .env.staging .env

RUN sed -i "s~APP_HOST=.*~APP_HOST=$HOSTNAME~g" .env

RUN REDIS_PASSWORD=$(grep ^REDIS_PASSWORD=.* .env | cut -d '=' -f2) \
    && sed -i "s~^requirepass.*~requirepass $REDIS_PASSWORD~g" /var/www/docker-compose/redis/redis.conf

RUN rm -f public/js/*.js \
          public/js/*.txt

RUN npm ci

RUN npm rebuild node-sass

RUN npm run production

RUN composer install

RUN php artisan key:generate

RUN php artisan config:cache

RUN php artisan route:cache

RUN php artisan view:cache

RUN php artisan optimize

RUN mkdir -p /vernemq/log /vernemq/data /vernemq/etc

COPY docker-compose/vernemq/log/ /vernemq/log

COPY docker-compose/vernemq/data/ /vernemq/data

COPY docker-compose/vernemq/etc/ /vernemq/etc

RUN sed -i 's/\r//g' docker-compose/build/setup.sh

CMD ["/bin/bash", "docker-compose/build/setup.sh"]
