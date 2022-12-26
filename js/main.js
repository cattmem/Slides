$('.header').clone(true).unwrap().appendTo('.hide-header');


$('.goToPrice').click(function() { 
    $('html, body').animate({scrollTop: $('.reviews .separation').offset().top + 'px'})
})




var isScroll = 0, // доп. проверка
    targetScroll = 70; // расстояние до действия / в px
    
$(window).on('scroll', function(){
  if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
    isScroll = 1;
    $(".hide-header").css({"top":"0", "opacity":"1"});
    console.log('12');
  } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
    isScroll = 0;
    $(".hide-header").css({"top":"-75px", "opacity":"0"});
  }
});
