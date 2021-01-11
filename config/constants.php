<?php

return [
    'device_statuses' => [
        'registered' => 0,
        'provisioned' => 1,
    ],

    'mqtt_methods' => [
        'triggerota' => 'triggerota',
        'triggeraota' => 'triggeraota',
        'triggerfota' => 'triggerfota',
        'triggersota' => 'triggersota',
        'triggerconfig' => 'triggerconfig',
        'shutdown_device' => 'shutdown_device',
        'reboot_device' => 'reboot_device',
        'decommission_device' => 'decommission_device',
        'file_upload' => 'file_upload',
    ],

    'mqtt_methods_integer_types' => [
        'triggerota' => 0,
        'triggeraota' => 1,
        'triggerfota' => 2,
        'triggersota' => 3,
        'triggerconfig' => 4,
        'shutdown_device' => 5,
        'reboot_device' => 6,
        'decommission_device' => 7,
        'file_upload' => 8,
    ],
];