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
	$mysqli->query('INSERT INTO `counters` (`ip`, `ts`, `counter`) VALUES ("' . $ip . '", NOW(), 1)');
  	echo 'It works';

  	$res = $mysqli->query('SELECT `ip`, `ts`, `counter` FROM `counters` ORDER BY `ts` DESC');
  	$content = '';
  	var_dump($res->num_rows);
  	if ($res->num_rows > 0) {
  		$content .= '<table><thead><tr><th>IP-адрес</th><th>Дата</th><th>Номер счетчика</th></tr></thead><tbody>';

  		while ($rec = $res->fetch_assoc()) {
  			$ip = $rec['ip'];
  			$date = $rec['ts'];
  			$counter = $rec['counter'] == 1 ? 'Основной счетчик' : '';
  			$content .= '<tr><td>' . $ip . '</td><td>' . $date . '</td><td>' . $counter . '</td></tr>';
  		}

  		$content .= '</tbody></table>';
  	}
  	var_dump($content);
  	print $content;
}

?>