$(function () {


    /*-------------------------------------
    Change Selected On Pagination On Click
    -------------------------------------*/

    $('.pages .pagination li a').click(function () {

        $(this).parent().addClass('selected').siblings().removeClass('selected');

    });

    /*-------------------------------------
    Search popup
    -------------------------------------*/

    $('.fa-search').on('click', function () {
        $('.popup').fadeIn(400);
    });

    $('.closebtn').on('click', function () {
        $('.popup').fadeOut(400);
    });

    /*-------------------------------------
    Loading Page
    -------------------------------------*/

    window.onload = function() {
        $('.spinner-box .spinner').fadeOut(200, function () {
            $(this).parent().fadeOut(700);
        });
    }

    /*-------------------------------------
    Add Class Active To Contact Inputs
    -------------------------------------*/

    $(".steps-contacts a").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

        $('.contact-inputs input').slideToggle();

    });

    /*-------------------------------------
    Animate Menu Bar
    -------------------------------------*/

    let menu = $('nav i.fa-bars');
    let navLinks = $('.links');
    menu.click(function () {
        if($(window).width() > 767) {
            if($(this).hasClass('open')) {
                $(this).removeClass('fa-bars open');
                $(this).addClass('fa-times');
                navLinks.slideToggle(300);
            } else {
                $(this).removeClass('fa-times');
                $(this).addClass('fa-bars open');
                navLinks.slideToggle(300);
            }       
        } else {
            $('.links-open').animate({
                right: '0'
            }, 400);

            $('.links-open .fa-times').click(function() {
                $(this).parent().animate({
                    right: '-100%'
                }, 400);
            });
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
        prevArrow: ' .left',
        nextArrow: ' .right',
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

    $('.testi-boxes').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
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

    $('.posts').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
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

    $('.exp-slides').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
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