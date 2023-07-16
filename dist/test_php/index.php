<?php

$db['server'] = 'localhost';
$db['username'] = 'c4a';
$db['password'] = 'a4c';
$db['dbname'] = 'c4a';

$mysqli = new mysqli($db['server'], $db['username'], $db['password'], $db['dbname']);
if ($mysqli->connect_error) {
  printf("Cant connect: %s\n", $mysqli -> connect_error);
  exit();
};


echo 'It works';

?>