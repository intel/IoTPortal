#!/usr/bin/env bash

# Start crond in background for logrotate
crond -l 2 -b

# Start nginx in foreground
nginx