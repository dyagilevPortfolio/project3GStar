$('.header__menu').click(function() {
    $('.header__menu-item').slideToggle();
 });

 $(".header__menu-link").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 900);
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

