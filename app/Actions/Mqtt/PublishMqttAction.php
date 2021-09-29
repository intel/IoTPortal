<?php
/*
 * Copyright (C) 2021 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

namespace App\Actions\Mqtt;

class PublishMqttAction
{
    public function execute(string $topic, string $payload)
    {
        $mqttConfig = config('mqttclient.connections.default');

        $mqtt = new \PhpMqtt\Client\MqttClient($mqttConfig['host'], $mqttConfig['port'], $mqttConfig['client_id']);
        $connectionSettings = (new \PhpMqtt\Client\ConnectionSettings)
            ->setUsername($mqttConfig['username'])
            ->setPassword($mqttConfig['password'])
            ->setConnectTimeout($mqttConfig['connect_timeout'])
            ->setSocketTimeout($mqttConfig['socket_timeout'])
            ->setResendTimeout($mqttConfig['resend_timeout'])
            ->setKeepAliveInterval($mqttConfig['keep_alive_interval'])
            ->setLastWillTopic($mqttConfig['last_will_topic'])
            ->setLastWillMessage($mqttConfig['last_will_message'])
            ->setLastWillQualityOfService($mqttConfig['last_will_quality_of_service'])
            ->setRetainLastWill($mqttConfig['last_will_retain'])
            ->setUseTls($mqttConfig['use_tls'])
            ->setTlsVerifyPeer($mqttConfig['tls_verify_peer'])
            ->setTlsVerifyPeerName($mqttConfig['tls_verify_peer_name'])
            ->setTlsSelfSignedAllowed($mqttConfig['tls_self_signed_allowed'])
            ->setTlsCertificateAuthorityFile($mqttConfig['tls_certificate_authority_file'])
            ->setTlsCertificateAuthorityPath($mqttConfig['tls_certificate_authority_path'])
            ->setTlsClientCertificateFile($mqttConfig['tls_client_certificate_file'])
            ->setTlsClientCertificateKeyFile($mqttConfig['tls_client_certificate_key_file'])
            ->setTlsClientCertificateKeyPassphrase($mqttConfig['tls_client_certificate_key_passphrase']);
        $mqtt->connect($connectionSettings);
        $mqtt->publish($topic, $payload);
        $mqtt->disconnect();
    }
}