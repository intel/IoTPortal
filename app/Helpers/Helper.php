<?php

namespace App\Helpers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class Helper
{
    static function mqttPublish(string $topic, string $payload): void
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

    static function isJson(string $string)
    {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    static function sanitisePayload(string|array $payload): string|null
    {
        Log::debug('root sanitisePayload->' . $payload);
        if (is_string($payload) && Helper::isJson($payload)) {
            Log::debug('isstring and isjson sanitisePayload->' . $payload);
            $payload = json_decode($payload);
            if (is_string($payload)) {
                $payload = json_decode($payload);
            }
        } elseif (is_string($payload)) {
            Log::debug('isstring only sanitisePayload->' . $payload);
            return $payload;
        }
        // Encode back to string for payload
        return json_encode($payload);
    }

    static function mapArrayKeyByArray(array $array, array $arrayMap)
    {
        foreach ($array as $k => $v) {
            if ($k !== $arrayMap[$k]) {
                unset ($array[$k]);
                $newKey = $arrayMap[$k];
                $array[$newKey] = $v;
            }
        }
        return $array;
    }

    static function apiResponseHttpOk($result = [], bool $success = true, $errors = [], $message = [], $status = 200, array $headers = [], $options = 0)
    {
        return response()->json(['result' => $result, 'success' => $success, 'errors' => $errors, 'messages' => $message], $status, $headers, $options);
    }

    static function apiResponseHttpBadRequest($errors = [], $message = [], $status = Response::HTTP_BAD_REQUEST, array $headers = [], $options = 0)
    {
        return response()->json(['result' => [], 'success' => false, 'errors' => $errors, 'messages' => $message], $status, $headers, $options);
    }

    static function apiResponseHttpInternalServerError($errors = [], $message = [], $status = Response::HTTP_INTERNAL_SERVER_ERROR, array $headers = [], $options = 0)
    {
        return response()->json(['result' => [], 'success' => false, 'errors' => $errors, 'messages' => $message], $status, $headers, $options);
    }

    static function apiResponseHttpUnauthorized($errors = [], $message = [], $status = Response::HTTP_UNAUTHORIZED, array $headers = [], $options = 0)
    {
        return response()->json(['result' => [], 'success' => false, 'errors' => $errors, 'messages' => $message], $status, $headers, $options);
    }

}
