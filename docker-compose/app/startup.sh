#!/bin/sh

php artisan migrate:fresh --seed

php-fpm