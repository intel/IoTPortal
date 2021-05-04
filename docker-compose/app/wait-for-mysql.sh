#!/bin/sh

set -e

host="$1"
shift
cmd="$@"

echo $host
echo $MYSQL_ROOT_PASSWORD

mysqladmin ping -h "$host" -P 3306 -u root --password="$MYSQL_ROOT_PASSWORD"

until out=$$(mysqladmin ping -h "$host" -P 3306 -u root --password="$MYSQL_ROOT_PASSWORD"); echo $out | grep "mysqld is alive"; do
  >&2 echo "MySQL is unavailable - sleeping"
  echo $out
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec $cmd