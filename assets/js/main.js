$( document ).ready(function() {
    $('.slider').mySlider();

    $('.tabs-button a').on('click', function (e) {
        e.preventDefault();
        var clickTab = $(this).attr('data-tab');

        $('.tabs-button a').removeClass('active');
        $(this).addClass('active');

        $('.active-tab-content > div').removeClass('active');
        $('div#' + clickTab).addClass('active');
    });
    
    $('.top-navbar-toggler').on('click', function () {
        $('nav').toggleClass('menu-open');
    });
    $('header').on('mouseenter click',  "*", function (e) {

        if ($(window).width() < 1023) {
            e.preventDefault();
        }

        if (e.target.closest('nav')) {
            $('.dropdown-block').show();
        } else if (!e.target.closest('.dropdown-block') && !e.target.closest('nav')) {
            $('.dropdown-block').hide();
        }
    });
});