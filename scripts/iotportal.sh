#!/usr/bin/env bash
set -e

cat <<"EOF"
 ___    _____   ____            _        _
|_ _|__|_   _| |  _ \ ___  _ __| |_ __ _| |
 | |/ _ \| |   | |_) / _ \| '__| __/ _` | |
 | | (_) | |   |  __/ (_) | |  | || (_| | |
|___\___/|_|   |_|   \___/|_|   \__\__,_|_|

EOF

cat <<EOF
IoT Portal
Copyright 2021-$(date +'%Y'), Intel Corporation

===================================================

EOF

# Setup

SECOND_UPPPER_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DATA_DIR="$SECOND_UPPPER_DIR/iotportaldata"

if [ $# -eq 2 ]; then
  DATA_DIR=$2
fi

CORE_VERSION="1.0.0"

echo "iotportal.sh version $CORE_VERSION"
docker --version
docker-compose --version

echo ""

# Functions

function checkDataDirExists() {
  if [ ! -d "$DATA_DIR" ]; then
    echo "Cannot find a IoT Portal installation at $DATA_DIR."
    exit 1
  fi
}

function checkDataDirNotExists() {
  if [ -d "$DATA_DIR" ]; then
    echo "Looks like IoT Portal is already installed at $DATA_DIR."
    exit 1
  fi
}

function listCommands() {
  cat <<EOT
Available commands:

install
start
restart
stop
rebuild
migrateDb
seedDb
seedDbSample
clearDb
help

EOT
}

# Commands

case $1 in
"install")
  checkDataDirNotExists
  mkdir -p $DATA_DIR
  $SCRIPTS_DIR/run.sh install $DATA_DIR
  ;;
"start" | "restart")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh restart $DATA_DIR
  ;;
"stop")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh stop $DATA_DIR
  ;;
"rebuild")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh rebuild $DATA_DIR
  ;;
"migrateDb")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh migrateDb $DATA_DIR
  ;;
"seedDb")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh seedDb $DATA_DIR
  ;;
"seedDbSample")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh seedDbSample $DATA_DIR
  ;;
"clearDb")
  checkDataDirExists
  $SCRIPTS_DIR/run.sh clearDb $DATA_DIR
  ;;
"help")
  listCommands
  ;;
*)
  echo "No command found."
  echo
  listCommands
  ;;
esac
