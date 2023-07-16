<?php

$db['server'] = 'localhost';
$db['username'] = 'c4a';
$db['password'] = 'a4c';
$db['dbname'] = 'c4a';

$mysqli = new mysqli($db['server'], $db['username'], $db['password'], $db['dbname']);
if (!$mysqli->connect_error) {
	$ip = isset($_SERVER['HTTP_CLIENT_IP']) 
	    ? $_SERVER['HTTP_CLIENT_IP'] 
	    : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) 
		    ? $_SERVER['HTTP_X_FORWARDED_FOR'] 
		    : $_SERVER['REMOTE_ADDR']);
	$mysqli->query('INSERT INTO `counters` SET `ip` = ' . $ip . ', `ts` = NOW(), `counter` = 1');
  	echo 'It works';
}

?>