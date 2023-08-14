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
    
    <!-- Matomo -->
    <script>
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://fan.febotele.com/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <!-- End Matomo Code -->

  </head>
  <body>
    <div class="download-page">
            <header class="header">
              <div class="header__center">
                <div class="header__side"><a class="header__logo" animation animation-arrow="bottom" href="/"><img class="header__logo__picture" src="/assets/img/logo.svg" loading="lazy"></a></div>
                <div class="header__side">
                  <div class="header__links" animation animation-arrow="bottom"><a class="header__links__link" href="/blog/">Blog</a><a class="header__links__link" href="/faq/">FAQ</a></div><a class="header__install" animation animation-arrow="bottom" href="https://cash4sms.today/Cash4SMS-1.0.81-production-rel.apk">Install the app</a>
                  <div class="header__burger">
                    <div class="header__burger__lines" animation animation-arrow="bottom">
                      <div class="header__burger__lines__line"></div>
                      <div class="header__burger__menu"><svg class="header__burger__menu__corner"  viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 0.5L0 6H13L6.5 0.5Z" fill="white"/>
</svg><a class="header__burger__menu__link" href="/blog/">Blog</a><a class="header__burger__menu__link" href="/faq/">FAQ</a>
                      </div>
                    </div>
                    <div class="header__burger__back"></div>
                  </div>
                </div>
              </div>
            </header>
      <div class="page">
        <div class="page__center">
          <div class="page__content" animation animation-arrow="bottom">
            <p class="download-page__text"> If the download does not start automatically, click <a  href="/Cash4SMS-1.0.81-production-rel.apk">this link </a></p>
          </div>
        </div>
      </div>
            <footer class="footer" animation>
              <div class="footer__center">
                <div class="footer__columns">
                  <div class="footer__columns__left">
                    <p class="footer__copyright" animation animation-arrow="bottom">&copy; 2021 cash4sms. All rights reserved.</p>
                    <div class="footer__links"><a class="footer__links__link" animation animation-arrow="bottom" href="/privacy-policy/">Privacy Policy</a><a class="footer__links__link" animation animation-arrow="bottom" href="/cookies-policy/">Cookie Policy</a><a class="footer__links__link" animation animation-arrow="bottom" href="/terms-of-use/">Terms of Use</a></div>
                  </div>
                  <div class="footer__columns__right">
                    <div class="footer__contacts">
                      <p class="footer__contacts__headline" animation animation-arrow="bottom">Contact Us</p>
                      <p class="footer__contacts__description" animation animation-arrow="bottom">We&prime;d love to hear from you and answer any <br class="br br_tablet">questions you might have.</p><a class="footer__contacts__mail" animation animation-arrow="bottom" href="mailto:hello@cash4sms.today">hello@cash4sms.today</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <script async>
              function waitFor() {
                if (typeof _paq === 'undefined') {
                  setTimeout(waitFor, 250);
                } else {
                  window.location.href = url;
                }
              }
              
              let url = "/Cash4SMS-1.0.81-production-rel.apk";
              waitFor();
            </script> 
    </div>
    <script src="/assets/js/common.js?v-1623095394490"></script>
  </body>
</html>

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
  }

?>