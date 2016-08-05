<?php

require("connect.php");

if($_POST) {
    $id = filter_input(INPUT_POST, "post_id", FILTER_SANITIZE_STRING);
    $data = ["username" => filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING),
        "comment" => filter_input(INPUT_POST, "comment", FILTER_SANITIZE_STRING),
    ];
    $result = $posts->updateOne(["_id" => new MongoDB\BSON\ObjectID($id)], ['$push' => ["comments" => $data]]);

    header("Location: /post.php?id=" . $id);
    exit;

} else {
    $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_STRING);
}

if($id):
    $post = $posts->findOne(["_id" => new MongoDB\BSON\ObjectID($id)]);

?>

<html>
<head>
<title>MongoDB in action</title>
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
</head>
<body>
<h1><?=$post->title ?></h1>

<p><?=$post->description ?></p>

<h2>Add Comments</h2>

<form action="post.php" method="post" class="pure-form pure-form-stacked">
<input type="hidden" name="post_id" value="<?=$id ?>" />

<label for="name">User Name
<input type="text" id="name" name="name" size="20"/>
</label>

<label for="comment">Comment
<textarea id="comment" name="comment" rows="4" cols="50"></textarea>
</label>

<input type="submit" value="Post comment" class="pure-button pure-button-primary"/>
</form>

<?php
foreach($post->comments as $comment):
?>

<hr />
<?=$comment->comment ?><em> - by <?=$comment->username?></em>

<?php
endforeach; // comments
endif; // if the post actually existed
?>


