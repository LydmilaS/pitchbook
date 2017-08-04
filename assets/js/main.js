$( document ).ready(function() {

    //mobile menu
    $('.top-navbar-toggler').on('click', function () {
        $('nav').toggleClass('menu-open');
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
    $('header').on('mouseenter click',  "*", function (e) {

        if ($(window).width() < 1023) {
            // prevent click on mobile
            e.preventDefault();
        }

        if (e.target.closest('nav') && e.target.nodeName === "A") {
            $('.dropdown-block').show();
        } else if (!e.target.closest('.dropdown-block') && !e.target.closest('nav')) {
            $('.dropdown-block').hide();
        }
    });
});