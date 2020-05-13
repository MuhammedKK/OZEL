$(function () {

    /*-------------------------------------
    Loading Page
    -------------------------------------*/

    window.onload = function() {
        $('.spinner-box .spinner').fadeOut(200, function () {
            $(this).parent().fadeOut(700);
        });
    }

    /*-------------------------------------
    Animate Menu Bar
    -------------------------------------*/

    let menu = $('i.fa-bars');
    let navLinks = $('.nav-link');
    menu.click(function () {
        if($(this).hasClass('open')) {
            $(this).removeClass('fa-bars open');
            $(this).addClass('fa-times');
            navLinks.slideToggle(300);
        } else {
            $(this).removeClass('fa-times');
            $(this).addClass('fa-bars open');
            navLinks.slideToggle(300);
        }
    });


    /*-------------------------------------
    Animate Search Bar
    -------------------------------------*/

    $('.fa-search').click(function() {
        $(".upper form").slideToggle(300);
    });

    /*-------------------------------------
    Trigger Slick Plugin
    -------------------------------------*/

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        autoplay:true,
        slidesToScroll: 1,
        prevArrow: '.fa-chevron-left',
        nextArrow: '.fa-chevron-right ',
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.sliding').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ' .fa-chevron-left',
        nextArrow: ' .fa-chevron-right ',
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});