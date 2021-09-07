$(document).ready(function () {
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if ($(window).scrollTop() > 30) {
            $('.header').css({'background':'#6e5ce7','box-shadow':'0 .2rem .5rem rgba(0,0,0..4)'});
        } else {
            $('.header').css({'background':'none','box-shadow':'none)'});
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    });
$(document).ready(function () {
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
$(document).ready(function () {
    $('.accordion-header').click(function(){
            $('.accordion .accordion-body').slideUp();
            $(this).next('.accordion-body').slideDown();
            $('.accordion .accordion-header span').text('+');
            $(this).children('span').text('-');
        });
});
});