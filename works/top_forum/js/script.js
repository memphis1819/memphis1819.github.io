$(document).ready(function(){
    const anounceSlider = $(".anounce-slider__wrapper").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: false,
        smartSpeed: 500,
        autoplay: false,
    });
    
    // Кастомные кнопки для слайдера Owl Carousel
    const anounceOwl = $('.anounce-slider__wrapper');
    anounceOwl.owlCarousel();
       
    $('.next-btn').click(function() {
        anounceOwl.trigger('next.owl.carousel');
    });
        
    $('.prev-btn').click(function() {        
        anounceOwl.trigger('prev.owl.carousel');
    });

    const reviewsSlider = $(".reviews_slider").owlCarousel({
        loop: true,
        items: 2,
        dots: false,
        nav: false,
        smartSpeed: 500,
        autoplay: false,
    });

    // Кастомные кнопки для слайдера Owl Carousel
    const reviewsOwl = $('.reviews_slider');
    reviewsOwl.owlCarousel();
        
    $('.reviews-next-btn').click(function() {
        reviewsOwl.trigger('next.owl.carousel');
    });
        
    $('.reviews-prev-btn').click(function() {        
        reviewsOwl.trigger('prev.owl.carousel');
    });

    const clientsSlider = $(".clients_slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        smartSpeed: 500,
        autoplay: false,
    });
    
    // Кастомные кнопки для слайдера Owl Carousel
    const clientsOwl = $('.clients_slider');
    clientsOwl.owlCarousel();
        
    $('.clients-next-btn').click(function() {
        clientsOwl.trigger('next.owl.carousel');
    });
        
    $('.clients-prev-btn').click(function() {        
        clientsOwl.trigger('prev.owl.carousel');
    });
});