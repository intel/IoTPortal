#!/usr/bin/env bash

set -e

host="$1"
shift
cmd="$@"

until
  out=$(mysqladmin ping -h "$host" -P 3306 -u "$MYSQL_USER" --password="$MYSQL_PASSWORD")
  echo $out | grep "mysqld is alive"
do
  echo >&2 "MySQL is unavailable - sleeping"
  sleep 1
done

echo >&2 "MySQL is up - executing command"
exec $cmd