#!/usr/bin/env bash

set -e

NET_INTERFACE=$(route | grep '^default' | grep -o '[^ ]*$')
NET_INTERFACE=${DOCKER_NET_INTERFACE:-${NET_INTERFACE}}
IP_ADDRESS=$(ip -4 addr show ${NET_INTERFACE} | grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | sed -e "s/^[[:space:]]*//" | head -n 1)
IP_ADDRESS=${DOCKER_IP_ADDRESS:-${IP_ADDRESS}}

sed -i -r "s/###IPADDRESS###/${IP_ADDRESS}/" /vernemq/etc/vernemq.conf

redis-server
