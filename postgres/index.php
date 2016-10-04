<?php
$db = new PDO("pgsql:sslmode=require host=aws-us-east-1-portal.17.dblayer.com port=11610 dbname=bookstore user=admin password=DBEIQOCFEBUBQYFI");

$stmt = $db->query('SELECT * from books');

$result = $stmt->execute();
if($result) {
    print_r($stmt->fetchAll(PDO::FETCH_ASSOC));
}

