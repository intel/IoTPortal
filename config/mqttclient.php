<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default MQTT Connection
    |--------------------------------------------------------------------------
    |
    | This setting defines the default MQTT connection returned when requesting
    | a connection without name from the facade.
    |
    */

    'default_connection' => 'default',

    /*
    |--------------------------------------------------------------------------
    | MQTT Connections
    |--------------------------------------------------------------------------
    |
    | These are the MQTT connections used by the application. You can also open
    | an individual connection from the application itself, but all connections
    | defined here can be accessed via name conveniently.
    |
    */

    'connections' => [
        'default' => [
            'external_endpoint' => env('MQTT_EXTERNAL_ENDPOINT', 'vernemq'),
            'host' => env('MQTT_HOST', 'vernemq'),
            'port' => (int)env('MQTT_PORT', 1883),
            'client_id' => env('MQTT_CLIENT_ID'),
            'username' => env('MQTT_USERNAME'),
            'password' => env('MQTT_PASSWORD'),
            'connect_timeout' => (int)env('MQTT_CONNECT_TIMEOUT', 60),
            'socket_timeout' => (int)env('MQTT_SOCKET_TIMEOUT', 5),
            'resend_timeout' => (int)env('MQTT_RESEND_TIMEOUT', 10),
            'keep_alive_interval' => (int)env('MQTT_KEEP_ALIVE_INTERVAL', 10),
            'last_will_topic' => env('MQTT_LAST_WILL_TOPIC'),
            'last_will_message' => env('MQTT_LAST_WILL_MESSAGE'),
            'last_will_quality_of_service' => (int)env('MQTT_LAST_WILL_QUALITY_OF_SERVICE', 0),
            'last_will_retain' => env('MQTT_LAST_WILL_RETAIN', false),
            'use_tls' => env('MQTT_USE_TLS', false),
            'tls_verify_peer' => env('MQTT_TLS_VERIFY_PEER', true),
            'tls_verify_peer_name' => env('MQTT_TLS_VERIFY_PEER_NAME', true),
            'tls_self_signed_allowed' => env('MQTT_TLS_SELF_SIGNED_ALLOWED', false),
            'tls_certificate_authority_file' => env('MQTT_TLS_CERTIFICATE_AUTHORITY_FILE'),
            'tls_certificate_authority_path' => env('MQTT_TLS_CERTIFICATE_AUTHORITY_PATH'),
            'tls_client_certificate_file' => env('MQTT_TLS_CLIENT_CERTIFICATE_FILE'),
            'tls_client_certificate_key_file' => env('MQTT_TLS_CLIENT_CERTIFICATE_KEY_FILE'),
            'tls_client_certificate_key_passphrase' => env('MQTT_TLS_CLIENT_CERTIFICATE_KEY_PASSPHRASE')
        ],
    ],

];