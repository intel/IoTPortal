#!/usr/bin/env bash

#
# Copyright (C) 2021 Intel Corporation
# SPDX-License-Identifier: MIT
#

set -e

role=${CONTAINER_ROLE:-app}

if [ "$role" = "app" ]; then

  echo "Running the app..."
  php-fpm

elif [ "$role" = "horizon" ]; then

  echo "Running horizon..."
  php artisan horizon

elif [ "$role" = "scheduler" ]; then

  #    Not implemented
  echo "Running scheduler..."
  exit 1

else
  echo "Could not match the container role \"$role\""
  exit 1
fi
