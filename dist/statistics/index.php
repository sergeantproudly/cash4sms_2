<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cash4sms - Download App</title>
    <meta name="description" property="og:description" content="Earn PayPal cash from the SMS you don’t use. With Cash4sms cash back app earning money was never so easy on your smartphone."><meta name="keywords"       content="" />
    <meta property="og:title" content="Cash4sms - Download App">
    <meta name="twitter:description" content="Earn PayPal cash from the SMS you don’t use. With Cash4sms cash back app earning money was never so easy on your smartphone.">
    <meta name="twitter:title" content="Cash4sms - Download App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/assets/css/main.css?v-1623095394489" rel="stylesheet">
    <link rel="shortcut icon" href="/favicon.ico?v-1685467825033">
    <meta property="og:image" content="/assets/img/preview.png"><meta property="og:locale" content="en_EN" />
<meta property="og:type" content="website" />
<meta property="og:url" content="" />
<meta property="og:site_name" content="" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/img/preview.png"><link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Poppins:ital,wght@0,400;0,500;0,600;1,300&display=swap" rel="stylesheet">
    <script type="text/javascript" src="/assets/js/jquery.js">    </script>
    <script type="text/javascript" src="/assets/js/ihavecookies.js?v-1">   </script>
    <style type="text/css">
    	table {
    		font-size: 20px;
    		padding: 3vw;
    		border-collapse: collapse;
    	}
    	table th {
    		padding: 10px 20px;
    		border: 1px solid #999;
    	}
    	table td {
    		padding: 10px 20px;
    		border: 1px solid #999;
    		transition: background-color .2s;
    	}
    	table tr:hover td {
    		background-color: #dcf5ff;
    		transition: background-color .2s;
    	}
    </style>
  </head>
  <body>
  	<div class="download-page">
  		<header class="header">
              <div class="header__center">
                <div class="header__side"><a class="header__logo" animation animation-arrow="bottom" href="/"><img class="header__logo__picture" src="/assets/img/logo.svg" loading="lazy"></a></div>
              </div>
            </header>

<?php

	$db['server'] = 'localhost';
	$db['username'] = 'c4a';
	$db['password'] = 'a4c';
	$db['dbname'] = 'c4a';

	$mysqli = new mysqli($db['server'], $db['username'], $db['password'], $db['dbname']);
	if (!$mysqli->connect_error) {
	  	$res = $mysqli->query('SELECT `ip`, `ts`, `counter` FROM `counters` ORDER BY `ts` DESC');
	  	$content = '';
	  	if ($res->num_rows > 0) {
	  		$content .= '<table cellspacing="0" cellpadding="0"><thead><tr><th>IP-адрес</th><th>Дата</th><th>Номер счетчика</th></tr></thead><tbody>';

	  		while ($rec = $res->fetch_assoc()) {
	  			$ip = $rec['ip'];
	  			$date = date('d.m.Y H:i', strtotime($rec['ts']));
	  			$counter = $rec['counter'] == 1 ? 'Основной счетчик' : '';
	  			$content .= '<tr><td>' . $ip . '</td><td>' . $date . '</td><td>' . $counter . '</td></tr>';
	  		}

	  		$content .= '</tbody></table>';
	  	}
	  	print $content;
	}

?>
	</div>
</body>
</html>