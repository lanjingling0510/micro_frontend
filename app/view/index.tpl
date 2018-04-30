<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="canonical" href="https://weather-pwa-sample.firebaseapp.com/final/">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>

    <style>
        .module {
            width: 100%;
            height: 100px;
            text-align: center;
            padding: 30px;
            position: relative;
        }
    </style>
</head>
<body>
    <div id="module1" class="module"></div>
    <div id="module2" class="module"></div>
    <div id="header" class="module"></div>
    <script>
        window.__config_paths__ = {{configPaths | dump | safe }};
        window.__config_static_host__ = "{{staticHost}}";
    </script>
    <script type="text/javascript" src="/public/page_a/require.js" data-main="/public/page_a/index.js"></script>
</body>

</html>
