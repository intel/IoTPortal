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

    'vernemq_hook' => [
        'auth_on_register' => 'auth_on_register',
        'auth_on_subscribe' => 'auth_on_subscribe',
        'auth_on_publish' => 'auth_on_publish',
        'on_register' => 'on_register',
        'on_publish' => 'on_publish',
        'on_subscribe' => 'on_subscribe',
        'on_unsubscribe' => 'on_unsubscribe',
        'on_deliver' => 'on_deliver',
        'on_offline_message' => 'on_offline_message',
        'on_client_wakeup' => 'on_client_wakeup',
        'on_client_offline' => 'on_client_offline',
        'on_client_gone' => 'on_client_gone',
        'auth_on_register_m5' => 'auth_on_register_m5',
        'on_auth_m5' => 'on_auth_m5',
        'auth_on_subscribe_m5' => 'auth_on_subscribe_m5',
        'auth_on_publish_m5' => 'auth_on_publish_m5',
        'on_register_m5' => 'on_register_m5',
        'on_publish_m5' => 'on_publish_m5',
        'on_subscribe_m5' => 'on_subscribe_m5',
        'on_unsubscribe_m5' => 'on_unsubscribe_m5',
        'on_deliver_m5' => 'on_deliver_m5',
    ],

];