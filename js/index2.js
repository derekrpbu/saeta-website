$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

//Mobile Nav
$(document).ready(function () {

    //Mobile Nav
    $('.js--nav-icon').click(function () {
      let nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
  
      nav.slideToggle(200);
  
      if (icon.hasClass('im im-menu')) {
        icon.removeClass('im im-menu');
        icon.addClass('im im-x-mark');
      } else {
        icon.removeClass('im im-x-mark');
        icon.addClass('im im-menu');
      }
    })
  
  })