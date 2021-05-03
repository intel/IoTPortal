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
RUN apt clean

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -

RUN apt install -y nodejs

RUN mkdir /certs

WORKDIR /certs

#RUN openssl req -new -newkey rsa:2048 -nodes -out localhost.csr -keyout localhost.key -subj "/C=US/ST=Oregon/L=Oregon/O=default/OU=default/CN=localhost"
#
#RUN openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt

COPY docker-compose/build/san.conf /certs

RUN openssl req -new -newkey rsa:2048 -nodes -out localhost.csr -keyout localhost.key -config san.conf

RUN openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt

COPY . /var/www

WORKDIR /var/www

RUN cp .env.staging .env

RUN rm public/js/*.js \
        public/js/*.txt

RUN npm ci

RUN npm rebuild node-sass

RUN npm run production

RUN composer install

RUN php artisan key:generate

RUN php artisan config:cache

RUN php artisan route:cache

RUN php artisan optimize

RUN mkdir -p /vernemq/log /vernemq/data /vernemq/etc

COPY --from=vernemq/vernemq:latest-alpine /vernemq/log /vernemq/log

COPY --from=vernemq/vernemq:latest-alpine /vernemq/data /vernemq/data

COPY --from=vernemq/vernemq:latest-alpine /vernemq/etc /vernemq/etc

CMD ["/bin/bash", "docker-compose/build/setup.sh"]
