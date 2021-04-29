$(document).ready(function(){
// Слайдер Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop:true,
    items:1,
    dots: false,
    nav: false,
    smartSpeed: 1000,
  });

// Кастомные кнопки для слайдера Owl Carousel
  const owl = $('.owl-carousel');
  owl.owlCarousel();
   
  $('.next').click(function() {
      owl.trigger('next.owl.carousel');
  });
    
  $('.prev').click(function() {
    
      owl.trigger('prev.owl.carousel');
  });

// Переключение табов
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

// Функция отображения основной и подробной информации в карточке
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

// Отображение основной и подробной информации в карточке
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

// Модальные окна
// Отображение МО консультации
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

// Отображение МО покупки с отображением названия конкретного товара
  $('.button_buy').each(function(i) {
    $(this).on('click', function() {
      // Чтение и отображение названия товара
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      // отображение МО
      $('.overlay, #order').fadeIn('slow');
    });
  });
// Скрытие всех МО
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

// Валидация форм
// Функция валидации форм
  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свой адрес почты",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  }

  validateForms('#consultation-form'); // Валидация формы бесплатной консультации
  validateForms('#consultation form'); // Валидация формы заявки на консультацию или звонок
  validateForms('#order form'); // Валидация формы заказа

  // Маска ввода в поле телефона в формах
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // Отправка данных форм с сайта
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  // Кнопка с прокруткой на верх страницы

  // Появляющаяся кнопка
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  // Плавная прокрутка
  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  // Подключение библиотерки анимаций
  new WOW().init();

});