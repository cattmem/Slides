$('.header').clone(true).unwrap().appendTo('.hide-header');
$('.goToPrice').click(function() { $('html, body').animate({scrollTop: $('.reviews .separation').offset().top + 'px'}) })

var isScroll = 0, targetScroll = 70;

if($.browser.mozilla) {
  $("body").prepend("<div style='width:100%;height:50px;background:#0066FF;display-box;border-box;border-bottom-left-radius:10px;border-bottom-right-radius:10px'><p style='padding-left:15px;padding-top:15px;color:#fff;font-weight:600;'>Вы используете старую версию браузера! <span style='font-weight:200;opacity:.9;'>Многие объекты могут отображаться неправильно, попробуйте <a style='border-bottom: solid 1px #fff' href='https://support.mozilla.org/ru/kb/obnovlenie-firefox-do-poslednego-vypuska'>проверить обновления для вашего браузера</a></span></p></div>");
} elif($.browser.opera) {
  $("body").prepend("<div style='width:100%;height:50px;background:#0066FF;display-box;border-box;border-bottom-left-radius:10px;border-bottom-right-radius:10px'><p style='padding-left:15px;padding-top:15px;color:#fff;font-weight:600;'>Вы используете старую версию браузера! <span style='font-weight:200;opacity:.9;'>Многие объекты могут отображаться неправильно, попробуйте <a style='border-bottom: solid 1px #fff' href='https://support.mozilla.org/ru/kb/obnovlenie-firefox-do-poslednego-vypuska'>проверить обновления для вашего браузера</a></span></p></div>");
} elif($.browser.webkit) {
  $("body").prepend("<div style='width:100%;height:50px;background:#0066FF;display-box;border-box;border-bottom-left-radius:10px;border-bottom-right-radius:10px'><p style='padding-left:15px;padding-top:15px;color:#fff;font-weight:600;'>Вы используете старую версию браузера! <span style='font-weight:200;opacity:.9;'>Многие объекты могут отображаться неправильно, попробуйте <a style='border-bottom: solid 1px #fff' href='https://support.mozilla.org/ru/kb/obnovlenie-firefox-do-poslednego-vypuska'>проверить обновления для вашего браузера</a></span></p></div>");
}


$(window).on('scroll', function(){
  if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
    isScroll = 1;
    $(".hide-header").css({"top":"0", "opacity":"1"});
  } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
    isScroll = 0;
    $(".hide-header").css({"top":"-75px", "opacity":"0"});
  }
});

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  // Theme set to dark.
} else {
  // Theme set to light.
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('link[rel~="icon"]').attr('href', 'img/FaviconLight.png');
    $('link[rel~="apple-touch-icon"]').attr('href', 'img/FaviconLight.png');
} else {
    $('link[rel~="icon"]').attr('href', 'img/FaviconDark.png');
    $('link[rel~="apple-touch-icon"]').attr('href', 'img/FaviconDark.png');
}
