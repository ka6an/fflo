function open_block(block) {
  // $('.about__child').removeClass('open');
  var top = $(block).offset().top - 98;
  $('body,html').animate({ scrollTop: top }, 500);
  $(block).toggleClass('open');
}
$(function() {
  $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    if (scroll_top > 100)
      $('header').addClass('scroll');
    else
      $('header').removeClass('scroll');

  });
});
