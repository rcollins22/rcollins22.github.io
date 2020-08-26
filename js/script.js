

/* Custom Js */

jQuery(function($) { 'use strict';

    $(document).ready(function () {

        
        // loader setting

        setTimeout(function() {
            $('body').addClass('loaded');
        }, 1500);
            
    });


    $(window).on('load', function() {


        // Isotope SetUp

        $('.portfolio-menu li').on('click', function(){
                $('.portfolio-menu li').removeClass('active-port');
                $(this).addClass('active-port');
            });

        var $container = $('#portfolio');
        $container.isotope({
          itemSelector: '.col-sm-4',
          layoutMode: 'fitRows'
        });
        
        $('#filters').on( 'click', 'a', function() {
          var filterValue = $(this).attr('data-filter');
          $container.isotope({ filter: filterValue });
          return false;
        });

    });


    $(document).ready(function() {


        // Tooltip

        $('[data-toggle="tooltip"]').tooltip();


        // Auto Height Home Page Size

        function screenheight() {
            var homePage = $('#main-header');

            homePage.css({
                'height': $(window).height() + 'px'
            });
            return false;
        }

        screenheight();
        $(window).resize(screenheight);


        // Navbar Auto Change

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('#navigation').removeClass('animated-header');           
            } else {
                $('#navigation').addClass('animated-header');            
            }
            return false;
        });


        // Bootstrap Hambarger

        $('.navbar-toggle').on('click', function(){
            $('.burg').toggleClass('activeBurg');
        }) 


        // Back To Top

         $(window).on('scroll', function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').slideDown();
            } else {
                $('.scroll-top').slideUp();
            }
        });

        $('.scroll-top').on('click', function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });


        // Typed JS

        $('#type').typed({
            stringsElement: $('#in-details'),
            typeSpeed: 2,
            backDelay: 700,
            loop: false,
            contentType: 'html',
            loopCount: false
        });


        // Fast Scroll For Navigation Menu

        $('a.fast-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });


        // Wow JS

        new WOW( {mobile: false} ).init(); 


        // Counter Up

        $('.countup').counterUp({
            delay: 10,
            time: 3000
        }); 


        // Magnific Popup

        $('.magni').magnificPopup({
            type:'image',
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 350},
            image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title') + '<a class="image-source-link" href="'+item.el.attr('data-source')+'">Details</a>';
            }
          }
        });

        $('.vid-frame').magnificPopup({
            type: 'iframe',
            removalDelay: 150
        });

    });


    $(document).ready(function() {
        
         //// Owl Carousel \\\\ 

        // Testimonial Carousel
        
        var owlTesti = $('#testimonial-carousel');
            owlTesti.owlCarousel({
                items: 1,
                margin: 0,
                autoHeight: false,
                rewind:true,
                autoplay : true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                dots: true
            });


        //  Blog Carousel

        var owlBlog = $('#post-carousel-blog');
              owlBlog.owlCarousel({
                items:   3,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                },
                margin: 4,
                rewind:false,
                autoHeight: false,
                autoplay : true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                paginationSpeed: 400,
                navigation: true,
                pagination: false,
                nav: true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                dots: false
              });


        // Portfolio Carousel

        var owlFolio = $('#carousel-portfolio');
              owlFolio.owlCarousel({
                items:   4,
                responsive:{
                    0:{
                        items: 1
                    },
                    400: {
                        items: 2
                    },
                    600:{
                        items: 3
                    },
                    1000:{
                        items: 4
                    }
                },
                margin: 8,
                rewind: false,
                autoHeight: false,
                autoplay : true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                paginationSpeed: 400,
                navigation: true,
                pagination: false,
                nav: true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                dots: false
              });        
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////