<?php

require("connect.php");

if($_POST) {
    $data = ["title" => filter_input(INPUT_POST, "title", FILTER_SANITIZE_STRING),
        "description" => filter_input(INPUT_POST, "post", FILTER_SANITIZE_STRING),
    ];
    $posts->insertOne($data);

    echo "Post saved";
 
} else {

    // show the form
?>

<html>
<head>
<title>MongoDB in action</title>
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
</head>
<body>
<h1>Add A Post</h1>

<form action="add_post.php" method="post" class="pure-form pure-form-stacked">
<label for="title">Title
<input type="text" id="title" name="title" size="60"/>
</label>

<label for="post">Post
<textarea id="post" name="post" rows="6" cols="80"></textarea>
</label>

<input type="submit" value="Save post" class="pure-button pure-button-primary"/>
</form>

<?php
}
?>
