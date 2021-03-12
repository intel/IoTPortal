# Set the base image for subsequent instructions
FROM php:latest

# Update packages
RUN apt update

# Install PHP and composer dependencies
RUN apt install -qq git curl libmcrypt-dev libjpeg-dev libpng-dev libfreetype6-dev libbz2-dev libzip-dev

# Clear out the local repository of retrieved package files
RUN apt clean

# Install needed extensions
# Here you can install any other extension that you need during the test and deployment process
RUN docker-php-ext-install pdo_mysql exif pcntl bcmath gd zip

# Install Composer
RUN curl --silent --show-error "https://getcomposer.org/installer" | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel Envoy
RUN composer global require "laravel/envoy=~1.0"