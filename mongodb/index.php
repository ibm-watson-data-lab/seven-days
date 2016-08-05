<?php

require("connect.php");

$all_posts = $posts->find([]);

?>

<html>
<head>
<title>MongoDB in action</title>
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
</head>
<body>
<h1>Blog Posts</h1>

<ul>
<?php
foreach($all_posts as $p):
?>
<li><a href="post.php?id=<?=$p->_id ?>"><?=$p->title ?></a> (<?=count($p->comments) ?> comments)</li>    

<?php
endforeach;
?>
</ul>
