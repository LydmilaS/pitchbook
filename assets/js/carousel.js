(function(){
    'use strict';

    window.Carousel = function (selector) {
        var carousel = document.querySelector(selector);
        renderSlider(selector, carousel);
    };


    function renderSlider(selector, carousel) {
        $(selector).wrap( "<div class='slider-wrap'></div>" );
        $(selector).closest('.slider-wrap').wrap( "<div class='carousel-wrap'></div>" );
        carousel.closest('.slider-wrap')
            .insertAdjacentHTML('afterend', '<div class="nav-slider"><a href="#" class="arrow-left"></a><a href="#" class="arrow-right"></a></div>');

        var wrapCarousel = carousel.closest('.carousel-wrap'),
            widthSlide,
            marginSlide;

        if ($(window).width() > 1023) {
                widthSlide = $(selector).width()/4;
                marginSlide = widthSlide/2;
        } else if ($(window).width() > 767 && $(window).width() < 1023) {
                widthSlide = $(selector).width()/3;
                marginSlide = widthSlide;
        }

        $(selector + " li").css({'width' : widthSlide, 'margin-right': marginSlide});

        bindEvents(wrapCarousel);
    }

    function bindEvents(wrapCarousel) {
        wrapCarousel.querySelector('.nav-slider').addEventListener('click', onArrowClick);
        // wrapCarousel.querySelector('.multiselect-filter').addEventListener('mouseenter', onMouseEnter);
        // wrapCarousel.querySelector('.multiselect-filter').addEventListener('mouseleave',   onMouseLeave);
        // wrapCarousel.querySelector('.multiselect-filter').addEventListener('touchmove', onTouchMove);
        // wrapCarousel.querySelector('.multiselect-list').addEventListener('touchend', onTouchEnd);
    }

    function onArrowClick(e) {
        e.preventDefault();
        var slider = e.target.closest('.carousel-wrap');
        var widthSlide = $(slider).width()/4;

        if (e.target.classList.contains('arrow-left')) {
            console.log(slider);
        } else {

        }

    }

})();