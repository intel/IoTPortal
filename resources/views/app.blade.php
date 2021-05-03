<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="version" content="90354">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Intel IoT Portal</title>
    <!-- Styles -->
    @include('includes.css')
    {{--    <link href="{{ asset('css/style.css') }}" rel="stylesheet">--}}
</head>
<body>
<div id="app">
</div>

<script src="{{ asset('js/index.js') }}"></script>
</body>
</html>
