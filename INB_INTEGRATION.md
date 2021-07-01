## About In-band Manageability

IoT Portal requires In-band Manageability to be installed on the IoT devices for remote over-the-air (OTA) updates to function.

## 📋 Requirements

- [Docker](https://www.docker.com/community-edition#/download)
- [Docker Compose](https://docs.docker.com/compose/install/) (already included with some Docker installations)
- IoT Portal

## ⚒️ Integrating IoT Portal adapter

Below are the steps to integrate IoT Portal adapter into In-band Manageability. The following guide assumes that you already have the In-band Manageability source code and is at the project root directory.

### INB Source Code Modification

Create the `intel_iot_portal_adapter.py` file with the following contents in `cloudadapter-agent/cloudadapter/cloud/adapters/intel_iot_portal_adapter.py` from the repository root of INB.
<details>
  <summary>intel_iot_portal_adapter.py</summary>

```python
# -*- coding: utf-8 -*-
"""
Adapter for communication with the cloud agent on the device. It abstracts
creation of the cloud connection, termination, creating commands etc.

Connects to Intel IoT Portal via the General Cloud MQTT client

@copyright: Copyright 2020 Intel Corporation All Rights Reserved.
@license: Intel, see licenses/LICENSE for more details.
"""

from cloudadapter.exceptions import AdapterConfigureError, ClientBuildError
from cloudadapter.constants import (INTEL_IOT_PORTAL_MQTT_PORT,
                                    INTEL_IOT_PORTAL_ENDPOINT,
                                    INTEL_IOT_PORTAL_CACERT,
                                    ADAPTER_CONFIG_PATH)
from cloudadapter.cloud.cloud_builders import build_client_with_config
from cloudadapter.cloud.adapters.generic_adapter import GenericAdapter
from base64 import b64encode, b64decode
from hashlib import sha256
from future.moves.urllib.request import quote
from hmac import HMAC
from time import time, sleep
import requests
import json
import os
import logging

logger = logging.getLogger(__name__)


class IntelIotPortalAdapter(GenericAdapter):

    def configure(self, unique_id, device_connection_key, device_unique_id):
        """Configure the Intel IoT Portal adapter

        @param unique_id: (str) The user unique id
        @param device_connection_key: (str) The device connection key
        @param device_unique_id: (str) The device unique id
        @exception AdapterConfigureError: If configuration fails
        """
        hostname, device_unique_id, device_mqtt_password = self._retrieve_mqtt_credentials(unique_id,
                                                                                           device_connection_key,
                                                                                           device_unique_id)
        event_pub = "devices/{}/messages/events/".format(device_unique_id)
        config = {
            "mqtt": {
                "username": device_unique_id,
                "password": device_mqtt_password,
                "hostname": hostname,
                "client_id": device_unique_id,
                "port": INTEL_IOT_PORTAL_MQTT_PORT
            },
            "proxy": {
                "auto": True
            },
            "tls": {
                "version": "TLSv1.2",
                "certificates": str(INTEL_IOT_PORTAL_CACERT)
            },
            "event": {
                "pub": event_pub,
                "format": "{\"eventGeneric\": \"{value}\"}"
            },
            "telemetry": {
                "pub": event_pub,
                "format": "{\"{key}\": \"{value}\"}"
            },
            "attribute": {
                "pub": "devices/{}/properties/reported/".format(device_unique_id),
                "format": "{\"{key}\": \"{value}\"}"
            },
            "method": {
                "pub": "iotportal/{}/methods/res/{}".format(device_unique_id, "{request_id}"),
                "format": "",
                "sub": "iotportal/{}/methods/POST/#".format(device_unique_id),
                "parse": {
                    "single": {
                        "request_id": {
                            "regex": r"iotportal\/{}\/methods\/POST\/(\w+)\/([\w=?$]+)".format(device_unique_id),
                            "group": 2
                        },
                        "method": {
                            "regex": r"iotportal\/{}\/methods\/POST\/(\w+)\/([\w=?$]+)".format(device_unique_id),
                            "group": 1
                        },
                        "args": {
                            "path": ""
                        }
                    }
                }
            }
        }

        try:
            self._client = build_client_with_config(config)
        except ClientBuildError as e:
            raise AdapterConfigureError(str(e))

    def _retrieve_mqtt_credentials(self, unique_id, device_connection_key, existing_device_unique_id):
        """Retrieve the IoT Portal credentials associated to the device

        @param unique_id: (str) The user unique id
        @param device_connection_key: (str) The device connection key
        @param existing_device_unique_id: (str) The existing device unique id
        @return:           (tuple) The IoT Portal MQTT hostname, device unique id and device MQTT password
        """

        # Set up the initial HTTP request
        endpoint = "{}/api/devices/register".format(INTEL_IOT_PORTAL_ENDPOINT)
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Connection": "keep-alive",
            "UserAgent": "prov_device_client/1.0",
            "Authorization": "Bearer {}".format(device_connection_key),
        }

        if existing_device_unique_id:
            payload = {'unique_id': unique_id, 'device_unique_id': existing_device_unique_id}

            # Place a registration request for the device
            result = requests.post(endpoint, headers=headers, json=payload, verify=INTEL_IOT_PORTAL_CACERT)
        else:
            payload = {'unique_id': unique_id}

            # Place a registration request for the device
            result = requests.post(endpoint, headers=headers, json=payload, verify=INTEL_IOT_PORTAL_CACERT)
        data = result.json()

        # Get the device's assigned hub
        if result.ok:
            mqtt_endpoint = data.get("result").get("mqttEndpoint")
            device = data.get("result").get("device")
            device_unique_id = device.get("unique_id")
            device_mqtt_password = device.get("mqtt_password")
            return [mqtt_endpoint, device_unique_id, device_mqtt_password]
        else:
            error = "Ran into an error retrieving hostname: {} {}".format(
                result.status_code, result.text)
            raise AdapterConfigureError(error)
```
</details>
<br />

Add the following contents to the end of `constants.py` file in `cloudadapter-agent/cloudadapter/constants.py` from the repository root of INB. These are the necessary constants for the adapter.
<details>
  <summary>constants.py</summary>

```python
# ========== Intel IoT Portal configuration constants


# The port to which the IntelMQTTClient should connect
INTEL_IOT_PORTAL_MQTT_PORT = 8883

# Endpoint for device provisioning
INTEL_IOT_PORTAL_ENDPOINT = "https://<your-portal-hostname>"

INTEL_IOT_PORTAL_CACERT = INTEL_MANAGEABILITY_ETC_PATH_PREFIX / \
    'public' / 'cloudadapter-agent' / 'rootCA.crt'
```
</details>
<br />

Modify the `main.go` file in `fpm/inb-provision-cloud/main.go` from the repository root of INB according to the following instructions.
<details>
  <summary>main.go</summary>

Add the following additional functions into the `main.go` file:
```go
func configureIntelIotPortal() string {
	println("\nConfiguring to use Intel IoT Portal...")

	uniqueId := promptString("Please enter your unique ID:")
	deviceConnectionKey := promptString("Please enter the Device Connection Key:")
	deviceUniqueId := promptString("Please enter the Device Unique Id (if available):")

	return makeIntelIotPortalJson(uniqueId, deviceConnectionKey, deviceUniqueId)
}

func makeIntelIotPortalJson(uniqueId string, deviceConnectionKey string, deviceUniqueId string) string {
	return `{ "cloud": "inteliotportal", "config": { "unique_id": "` + uniqueId +
	`", "device_connection_key": "` + deviceConnectionKey +
	`", "device_unique_id": "` + deviceUniqueId + `" } }`
}
```

Modify the `setUpCloudCredentialDirectory` function in the `main.go` file to add an additional `case` for IoT Portal selection:
```go
 case "Intel IoT Portal":
		cloudConfig = configureIntelIotPortal()
```
</details>

### Adding Self-Signed CA Certificate to Build
If you are using self-signed CA certificate, follow the step below to add the certificate to the build.

Copy the `rootCA.crt` file from `iotportaldata/ca-certificates/rootCA.crt` of your IoT Portal installation to `cloudadapter-agent/fpm-template/etc/intel-manageability/public/cloudadapter-agent`.

### Building
Navigate to the root directory of the INB source code and build INB using the `./build.sh` build script.
```shell
./build.sh
```
