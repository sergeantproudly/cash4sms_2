!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=n(2);i='Плавный скролл по якорю"';try{new o('a[href*="#"]',{speed:500,speedAsDuration:!0,offset:function(e,t){return 0}})}catch(e){console.error("Не работает: ".concat(i))}var r,a,i="FAQ";try{var s=document.querySelectorAll(".faq__question");!function(){for(var e=function(e){var t=s[e],n=t.querySelector(".faq__question__answer"),o=n.offsetHeight;n.style.height="0px",t.addEventListener("click",(function(){if(t.classList.contains("faq__question_hidden"))return n.style.height="0px",t.classList.remove("faq__question_hidden");n.style.height="".concat(o,"px"),t.classList.add("faq__question_hidden")})),window.addEventListener("optimizedResize",(function(){n.style.height="auto",o=n.offsetHeight,t.classList.contains("faq__question_hidden")?n.style.height="".concat(o,"px"):n.style.height="0px"}))},t=0;t<s.length;t++)e(t)}()}catch(e){console.error("Не работает: ".concat(i))}i="slides - how it works";try{!function(){for(var e=function(e,t){e.setAttribute("init","1");var n=e.querySelectorAll("[data-slides-slide]"),o=e.querySelector("[data-info-slide]"),r=e.querySelector("[data-dynamic-height]"),a=e.querySelector("[slide-left-tab]"),i=e.querySelector("[slide-right-tab]"),s=n.length,c=0,l=0,u=0,d=[],f=0,m=!0;function h(){d=[],o.style.transition="0s",o.style.height="auto",u=0,f=0;for(var t=0;t<s;t++)for(var n=e.querySelectorAll('[data-attach-slide="'.concat(t,'"]')),a=0;a<n.length;a++){n[a].style.display="none"}for(var i=0;i<s;i++){for(var l=e.querySelectorAll('[data-attach-slide="'.concat(i,'"]')),m=0;m<l.length;m++){var h=l[m];h.style.display=f==i?"block":"none"}f+=1,d.push(o.offsetHeight),u<o.offsetHeight&&(u=o.offsetHeight);for(var y=0;y<l.length;y++){l[y].style.display="none"}}for(var v=0;v<s;v++)for(var p=e.querySelectorAll('[data-attach-slide="'.concat(v,'"]')),g=0;g<p.length;g++){var _=p[g];v==c&&(_.style.display="block")}o.style.height="".concat(u,"px"),r.style.height="".concat(d[c],"px")}a.addEventListener("click",(function(){_("prev")})),i.addEventListener("click",(function(){_()})),h(),window.addEventListener("resize",(function(){h()}));var y=0,v=0,p="",g=e.querySelectorAll('[data-attach-slide="'.concat(c,'"]'));function _(t){l=0;for(var o=e.querySelectorAll('[data-attach-slide="'.concat(c,'"]')),a=function(e){var n=o[e];"prev"==t?(n.style.transform="translateX(0rem)",n.style.opacity="1",n.style.transition="0.3s",n.style.transform="translateX(40rem)"):(n.style.transform="translateX(0rem)",n.style.opacity="1",n.style.transition="0.3s",n.style.transform="translateX(-40rem)"),n.style.opacity="0",setTimeout((function(){n.style.display="none"}),300)},i=0;i<o.length;i++)a(i);setTimeout((function(){for(var n=e.querySelectorAll('[data-attach-slide="'.concat(c,'"]')),o=function(e){var o=n[e];o.style.display="block","prev"==t?(o.style.transform="translateX(-40rem)",o.style.transition="0.2s",o.style.opacity="0",setTimeout((function(){o.style.transform="translateX(0rem)",o.style.opacity="1"}),100)):(o.style.transform="translateX(40rem)",o.style.transition="0.2s",o.style.opacity="0",setTimeout((function(){o.style.transform="translateX(0rem)",o.style.opacity="1"}),100))},a=0;a<n.length;a++)o(a);r.style.height="".concat(d[c],"px")}),300),"prev"==t?0==c?c=s-1:--c:c>=s-1?c=0:++c;for(var u=0;u<n.length;u++){n[u].querySelector("[data-slides-slide-percent]").style.width="".concat(0,"%")}for(var f=0;f<n.length;f++){var m=n[f];f<=c-1&&(m.querySelector("[data-slides-slide-percent]").style.width="".concat(100,"%"))}}e.addEventListener("touchstart",(function(t){g=e.querySelectorAll('[data-attach-slide="'.concat(c,'"]')),m=!1,y=t.touches[0].clientX,v=t.touches[0].clientX})),e.addEventListener("touchmove",(function(e){p=y>e.touches[0].clientX?"next":"prev",v=e.touches[0].clientX;for(var t=0;t<g.length;t++){var n=g[t];n.style.transition="0s",n.style.transform="translateX(".concat(.25*(v-y),"rem)")}})),e.addEventListener("touchend",(function(t){if(m=!0,Math.abs(v-y)>30)_(p);else for(var n=e.querySelectorAll('[data-attach-slide="'.concat(c,'"]')),o=0;o<n.length;o++){var r=n[o];r.style.transition="0.3s",r.style.transform="translateX(0rem)"}})),function e(){n[c].querySelector("[data-slides-slide-percent]").style.width="".concat(l,"%"),l>99?(l=0,_()):m&&(l+=.6),requestAnimationFrame(e)}()},t=document.querySelectorAll(".how-it-works__block"),n=function(n){var o=t[n];function r(t){var n=window.scrollY;n>100&&(t="scroll");var r=window.innerHeight,a=o.getBoundingClientRect().top,i=Math.floor(a/r*100),s="scroll"==t?85:98;n+r>document.querySelector("body").getBoundingClientRect().height-100&&(s=100),i<s&&(o.getAttribute("init")||e(o))}window.addEventListener("scroll",(function(){r("scroll")})),window.addEventListener("optimizedResize",(function(){r("scroll")})),r("load")},o=0;o<t.length;o++)n(o)}()}catch(e){console.error("".concat(e)),console.error("Не работает: ".concat(i))}i='Мобильное меню"';try{var c=document.querySelector(".header__burger__lines"),l=document.querySelector(".header__burger__back"),u=document.querySelector(".header__burger__menu");r=function(){c.classList.add("header__burger__lines_active-1"),l.classList.add("header__burger__back_1"),u.classList.add("header__burger__menu_1"),setTimeout((function(){c.classList.add("header__burger__lines_active-2"),l.classList.add("header__burger__back_2"),u.classList.add("header__burger__menu_2")}),300),document.querySelector("body").style.overflow="hidden",document.querySelector("html").style.overflow="hidden"},a=function(){c.classList.contains("header__burger__lines_active-2")&&(c.classList.remove("header__burger__lines_active-1"),l.classList.remove("header__burger__back_1"),u.classList.remove("header__burger__menu_1"),setTimeout((function(){c.classList.remove("header__burger__lines_active-2"),l.classList.remove("header__burger__back_2"),u.classList.remove("header__burger__menu_2")}),300)),document.querySelector("body").removeAttribute("style"),document.querySelector("html").removeAttribute("style")},c.addEventListener("click",(function(){c.classList.contains("header__burger__lines_active-2")?a():r()}))}catch(e){console.error("Не работает: ".concat(i))}i='Анимация тего с атрибутом animation"';try{var d=document.querySelectorAll("[animation]"),f=0,m=function(e,t){if(!e.hidden){var n=window.scrollY;n>100&&(t="scroll");var o=window.innerHeight,r=e.getBoundingClientRect().top,a=Math.floor(r/o*100),i="scroll"==t?85:98;if(n+o>document.querySelector("body").getBoundingClientRect().height-100&&(i=100),a<i&&null!=e.getAttribute("animation")){var s=null!=e.getAttribute("animation-scale"),c=e.getAttribute("animation-arrow"),l=e.getAttribute("animation-settimeout"),u=e.getAttribute("animation-duration"),m="string"==typeof e.getAttribute("animation-bulba");if(l=l?+l:200,s&&(e.style.transform="scale(0.9)"),c){var h="";"bottom"==c?h="0, 20rem":"top"==c?h="0, -20rem":"left"==c?h="-20rem, 0":"right"==c&&(h="20rem, 0"),e.style.transform="translate(".concat(h,")")}l&&(f+=Number(l)),setTimeout((function(){e.style.transitionTimingFunction="cubic-bezier(.19,1,.22,1)",u&&(e.style.transitionDuration="".concat(u,"s")),m||(e.style.transitionDuration="1s"),s&&(e.style.transform="scale(1)"),c&&(e.style.transform="translate(0, 0)"),e.style.opacity="1",m&&(e.style.transitionTimingFunction="ease",setTimeout((function(){e.style.transitionDuration="0.3s",e.style.transform="scale(1.20)"}),100),setTimeout((function(){e.style.transform="scale(1)"}),300)),e.removeAttribute("animation"),d=document.querySelectorAll("[animation]"),setTimeout((function(){m||e.removeAttribute("style")}),u?1e3*u:1e3)}),"scroll"==t?0:f)}}};window.addEventListener("scroll",(function(){for(var e=0;e<d.length;e++){var t=d[e];m(t,"scroll")}})),window.addEventListener("optimizedResize",(function(){for(var e=0;e<d.length;e++){var t=d[e];m(t,"scroll")}}));for(var h=0;h<d.length;h++){var y=d[h];m(y,"load")}}catch(e){for(var v=document.querySelectorAll("[animation]"),p=0;p<v.length;p++){v[p].removeAttribute("animation")}console.error("Не работает: ".concat(i))}document.querySelectorAll("a[href$='.apk'").forEach((function(e){e.addEventListener("click",(function(){var e=new Event("App_download",{bubbles:!0});document.dispatchEvent(e),gtag("event","App_download"),dataLayer.push({event:"App_download"}),console.log("App_download event")}))}))},function(e,t,n){},function(e,t,n){(function(n){var o,r;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+r)}),r);return e=o+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(s,c){var l,u,d,f,m={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||i("scrollCancel",l)},animateScroll:function(o,s,c){m.cancelScroll();var u=n(l||t,c||{}),h="[object Number]"===Object.prototype.toString.call(o),y=h||!o.tagName?null:o;if(h||y){var v=e.pageYOffset;u.header&&!d&&(d=document.querySelector(u.header));var p,g,_,b,w,S,q,A,E=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),L=h?o:function(t,n,o,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-o,0),a&&(i=Math.min(i,r()-e.innerHeight)),i}(y,E,parseInt("function"==typeof u.offset?u.offset(o,s):u.offset,10),u.clip),O=L-v,x=r(),M=0,C=(p=O,_=(g=u).speedAsDuration?g.speed:Math.abs(p/1e3*g.speed),g.durationMax&&_>g.durationMax?g.durationMax:g.durationMin&&_<g.durationMin?g.durationMin:parseInt(_,10)),T=function(t){var n,r,c;b||(b=t),M+=t-b,S=v+O*(r=w=1<(w=0===C?0:M/C)?1:w,"easeInQuad"===(n=u).easing&&(c=r*r),"easeOutQuad"===n.easing&&(c=r*(2-r)),"easeInOutQuad"===n.easing&&(c=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(c=r*r*r),"easeOutCubic"===n.easing&&(c=--r*r*r+1),"easeInOutCubic"===n.easing&&(c=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(c=r*r*r*r),"easeOutQuart"===n.easing&&(c=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(c=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(c=r*r*r*r*r),"easeOutQuint"===n.easing&&(c=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(c=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(c=n.customEasing(r)),c||r),e.scrollTo(0,Math.floor(S)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(v<n&&e.innerHeight+r)>=x)return m.cancelScroll(!0),a(o,n,h),i("scrollStop",u,o,s),!(f=b=null)}(S,L)||(f=e.requestAnimationFrame(T),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),q=o,A=u,h||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:q.id},document.title,q===document.documentElement?"#top":"#"+q.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(L),!1):(i("scrollStart",u,o,s),m.cancelScroll(!0),e.requestAnimationFrame(T))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(s))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,r;try{n=o(decodeURIComponent(u.hash))}catch(t){n=o(u.hash)}if("#"===n){if(!l.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),m.animateScroll(r,u))}},y=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||m.animateScroll(t,null,{updateURL:!1})}};return m.destroy=function(){l&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",y,!1),m.cancelScroll(),f=d=u=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),l=n(t,c||{}),d=l.header?document.querySelector(l.header):null,document.addEventListener("click",h,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",y,!1)}(),m}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);