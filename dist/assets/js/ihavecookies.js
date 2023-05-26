(function ($) {
    $.fn.ihavecookies = function (options, event) {
        var $element = $(this);
        var settings = $.extend({
            cookieTypes: [{
                type: 'Site Preferences',
                value: 'preferences',
                description: 'These are cookies that are related to your site preferences,e.g.remembering your username,site colours,etc.'
            }, {
                type: 'Analytics',
                value: 'analytics',
                description: 'Cookies related to site visits,browser types,etc.'
            }, {
                type: 'Marketing',
                value: 'marketing',
                description: 'Cookies related to marketing,e.g.newsletters,social media,etc'
            }],
            title: 'Cookies&Privacy',
            message: 'Cookies enable you to use shopping carts and to personalize your experience on our sites,tell us which parts of our websites people have visited,help us measure the effectiveness of ads and web searches,and give us insights into user behavior so we can improve our communications and products.',
            link: '/privacy-policy/',
            delay: 2000,
            expires: 30,
            moreInfoLabel: 'More information',
            acceptBtnLabel: 'Accept',
            advancedBtnLabel: 'Customise',
            cookieTypesTitle: 'Select cookies to accept',
            fixedCookieTypeLabel: 'Necessary',
            fixedCookieTypeDesc: 'These are cookies that are essential for the website to work correctly.',
            onAccept: function () { },
            uncheckBoxes: !1
        }, options);
        var myCookie = getCookie('cookieControl');
        var myCookiePrefs = getCookie('cookieControlPrefs');
        if (!myCookie || !myCookiePrefs || event == 'reinit') {
            $('#gdpr-cookie-message').remove();
            var cookieTypes = '<div class="gdpr-cookie-message__types__checkboxes__checkbox"><input type="checkbox" name="gdpr[]" value="necessary" checked="checked" disabled="disabled"><label title="' + settings.fixedCookieTypeDesc + '">' + settings.fixedCookieTypeLabel + '</label></div>';
            preferences = JSON.parse(myCookiePrefs);
            $.each(settings.cookieTypes, function (index, field) {
                if (field.type !== '' && field.value !== '') {
                    var cookieTypeDescription = '';
                    if (field.description !== !1) {
                        cookieTypeDescription = ' title="' + field.description + '"'
                    }
                    cookieTypes += '<div class="gdpr-cookie-message__types__checkboxes__checkbox"><input type="checkbox" id="gdpr-cookietype-' + field.value + '" name="gdpr[]" value="' + field.value + '" data-auto="on"><label for="gdpr-cookietype-' + field.value + '"' + cookieTypeDescription + '>' + field.type + '</label></div>'
                }
            });
            var cookieMessage = '<div id="gdpr-cookie-message" class="gdpr-cookie-message"><p class="gdpr-cookie-message__headline">' + settings.message + '<a class="gdpr-cookie-message__headline__link" href="' + settings.link + '">' + settings.moreInfoLabel + '</a><div class="gdpr-cookie-message__types" id="gdpr-cookie-types" style="display:none;"><p class="gdpr-cookie-message__types__title">' + settings.cookieTypesTitle + '</p><div class="gdpr-cookie-message__types__checkboxes">' + cookieTypes + '</div></div><div class="gdpr-cookie-message__actions"><button id="gdpr-cookie-accept" class="gdpr-cookie-message__actions__accept" type="button">' + settings.acceptBtnLabel + '</button><button id="gdpr-cookie-advanced" class="gdpr-cookie-message__actions__customize" type="button">' + settings.advancedBtnLabel + '</button></div></div>';
            setTimeout(function () {
                $($element).append(cookieMessage);
                $('#gdpr-cookie-message').hide().fadeIn('slow', function () {
                    if (event == 'reinit') {
                        $('#gdpr-cookie-advanced').trigger('click');
                        $.each(preferences, function (index, field) {
                            $('input#gdpr-cookietype-' + field).prop('checked', !0)
                        })
                    }
                })
            }, settings.delay);
            $('body').on('click', '#gdpr-cookie-accept', function () {
                dropCookie(!0, settings.expires);
                $('input[name="gdpr[]"][data-auto="on"]').prop('checked', !0);
                var prefs = [];
                $.each($('input[name="gdpr[]"]').serializeArray(), function (i, field) {
                    prefs.push(field.value)
                });
                setCookie('cookieControlPrefs', encodeURIComponent(JSON.stringify(prefs)), 365);
                settings.onAccept.call(this)
            });
            $('body').on('click', '#gdpr-cookie-advanced', function () {
                $('input[name="gdpr[]"]:not(:disabled)').attr('data-auto', 'off').prop('checked', !1);
                document.querySelector("#gdpr-cookie-types").style.display = 'block';
                document.querySelector("#gdpr-cookie-advanced").style.display = 'none';
                document.querySelector(".gdpr-cookie-message__headline").style.display = 'none'
            })
        } else {
            var cookieVal = !0;
            if (myCookie == '!1') {
                cookieVal = !1
            }
            dropCookie(cookieVal, settings.expires)
        }
        if (settings.uncheckBoxes === !0) {
            $('input[type="checkbox"].ihavecookies').prop('checked', !1)
        }
    };
    $.fn.ihavecookies.cookie = function () {
        var preferences = getCookie('cookieControlPrefs');
        return JSON.parse(preferences)
    };
    $.fn.ihavecookies.preference = function (cookieTypeValue) {
        var control = getCookie('cookieControl');
        var preferences = getCookie('cookieControlPrefs');
        preferences = JSON.parse(preferences);
        if (control === !1) {
            return !1
        }
        if (preferences === !1 || preferences.indexOf(cookieTypeValue) === -1) {
            return !1
        }
        return !0
    };
    var dropCookie = function (value, expiryDays) {
        setCookie('cookieControl', value, expiryDays);
        $('#gdpr-cookie-message').fadeOut('fast', function () {
            $(this).remove()
        })
    };
    var setCookie = function (name, value, expiry_days) {
        var d = new Date();
        d.setTime(d.getTime() + (expiry_days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        return getCookie(name)
    };
    var getCookie = function (name) {
        var cookie_name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(cookie_name) === 0) {
                return c.substring(cookie_name.length, c.length)
            }
        }
        return !1
    }
}(jQuery));
$(document).ready(function () {
    var titleCookie = "This website uses cookies to ensure you get the best experience on our website. ";
    var textLink = "More information";
    var acceptBtn = 'Accept';
    var advancedBtn = 'Customise';
    if ($('html').attr('lang') == "fr") {
        titleCookie = "Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site web. ";
        textLink = "Plus d'information";
        acceptBtn = "Accepter";
        advancedBtn = "Personnaliser";
    };

    $('body').ihavecookies({
        title: "Cookies&Privacy",
        message: titleCookie,
        moreInfoLabel: textLink,
        link: "/cookies-policy/",
        acceptBtnLabel: acceptBtn,
        advancedBtnLabel: advancedBtn,
        delay: 500,
        expires: 30,
    })
})