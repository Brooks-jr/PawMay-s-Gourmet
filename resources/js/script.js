$(document).ready(function () {

    // NAV
    $('.waypoint-trigger').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('fixed__nav');
        } else {
            $('nav').removeClass('fixed__nav');
        }
    }, {
            offset: '60px;'
        });


    // CTAs
    $('.scroll__pricing').click(function () {
        $('html, body').animate({ scrollTop: $('.pricing').offset().top }, 1000);
    })

    $('.scroll__features').click(function () {
        $('html, body').animate({ scrollTop: $('.features').offset().top }, 1000);
    })


    // NAV SCROLL
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


        // ON SCROLL ANIMATIONS
        $('.waypoint__animation-1').waypoint(function(direction) {
            $('.waypoint__animation-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.waypoint__animation-2').waypoint(function(direction) {
            $('.waypoint__animation-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        $('.waypoint__animation-3').waypoint(function(direction) {
            $('.waypoint__animation-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.waypoint__animation-4').waypoint(function(direction) {
            $('.waypoint__animation-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });

        $('.waypoint__animation-5').waypoint(function(direction) {
            $('.waypoint__animation-5').addClass('animated slideInRight');
        }, {
            offset: '50%'
        });


        // HAMBURGER
        $('.hamburger').click(function() {
            var nav = $('.header__nav-list');
            var icon = $('.hamburger i');

            nav.slideToggle(200);
            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });

        // GOOGLE MAPS

        var map = new GMaps({
            div: '.map',
            lat: 40.7830857,
            lng: -73.9638958,
            zoom: 12
          });

        map.addMarker({
            lat: 40.7709669,
            lng: -73.9853808,
            title: 'PawMay\'s Gourmet, NY',
            infoWindow: {
                content: '<p>PawMay\'s New York HQ</p>'
              }
        });
});