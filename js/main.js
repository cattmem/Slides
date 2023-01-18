$('.header').clone(true).unwrap().appendTo('.hide-header');
$('.goToPrice').click(function() { $('html, body').animate({scrollTop: $('.reviews .separation').offset().top + 'px'}) })
var isScroll = 0, targetScroll = 70;
$(window).on('scroll', function(){
  if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
    isScroll = 1;
    $(".hide-header").css({"top":"0", "opacity":"1"});
  } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
    isScroll = 0;
    $(".hide-header").css({"top":"-75px", "opacity":"0"});
  }
});
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('link[rel~="icon"]').attr('href', 'img/FaviconLight.png');
    $('link[rel~="apple-touch-icon"]').attr('href', 'img/FaviconLight.png');
} else {
    $('link[rel~="icon"]').attr('href', 'img/FaviconDark.png');
    $('link[rel~="apple-touch-icon"]').attr('href', 'img/FaviconDark.png');
}
