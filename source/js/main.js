$( document ).ready(function() {

    //mobile menu
    $('.top-navbar-toggler').on('click', function () {
        $('.navigation').toggleClass('menu-open');
    });

    // init slider
    $('.slider').mySlider();

    //init parallax
    $('.parallax-one').myParallax();

    // tabs for many block
    $('.tabs-button a').on('click', function (e) {
        e.preventDefault();
        var clickTab = $(this).attr('data-tab');

        tabs($('.tabs-button a'), $(this));
        tabs($('.active-tab-content > div'), $('div#' + clickTab));
    });

    function tabs(elRmCl, elAddCl) {
        elRmCl.removeClass('active');
        elAddCl.addClass('active');
    }
    
    // large menu on hover event
    $('.top-link').on('mouseenter', function () {
        if ($(window).width() > 1023) {
            $(this).closest('li').addClass('dropdownShow');
        }
    });

    $('.navigation li').on('mouseleave', function () {
        if ($(window).width() > 1023) {
            $(this).removeClass('dropdownShow');
        }
    });

    $('.top-link').on('click', function (e) {
        if ($(window).width() < 1024) {
            e.preventDefault();
            $('.top-link').not(this).closest('li').removeClass('dropdownShow');
            $(this).closest('li').toggleClass('dropdownShow');
        }

    });

});