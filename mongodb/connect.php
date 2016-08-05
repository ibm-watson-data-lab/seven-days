<?php

require("vendor/autoload.php");

$context = stream_context_create( [ 'ssl' => [ 'cafile' => "./cert"] ] );
$client = new MongoDB\Client("mongodb://username:password@hostname.com:28086/admin?ssl=true", [], [ "context" => $context ]);

$posts = $client->selectDatabase("posts")->selectCollection("posts");

