//     function onArrowClick(e) {
//         e.preventDefault();
//         var slider = e.target.closest('.carousel-wrap');
//         var widthSlide = $(slider).width()/4;
//
//         if (e.target.classList.contains('arrow-left')) {
//             console.log(slider);
//         } else {
//
//         }
//
//     }
//
// })();
(function( $ ) {
    'use strict';

    $.fn.mySlider = function(options) {

        var settings = {
            item: 3,
            slideMargin: 10,
            easing: 'linear',
            speed: 2000, //ms'
            auto: true,
            pauseOnHover: true
        }, i = 0, autoMove;

        function autoSlide(slider) {
            if(settings.auto) {
                autoMove = setInterval(move.bind(this, slider, 'right'), settings.speed);
            }
        }
        function bindEvents(slider) {
            slider.next().find('.arrow-left').on('click', move.bind(this, slider, 'left'));
            slider.next().find('.arrow-right').on('click', move.bind(this, slider, 'right'));
            slider.on('mouseenter', function () {
                clearInterval(autoMove);
            });
            slider.on('mouseleave', function () {
                autoSlide(slider);
            });
        }

        function renderSlider(slider) {
            slider.wrap( "<div class='slider-wrap'></div>" );
            $('.slider-wrap').wrap( "<div class='slider-container'></div>" );
            $( '<div class="slider-nav"><button class="arrow-left"></button><button class="arrow-right"></button></div>' ).appendTo( ".slider-wrap" );
            console.log(slider.children().length);

            for (var j = 0; j < slider.children().length; j++ ) {
                if (j === 3) { continue; }
                console.log(slider.children()[j]);
                break;
            }
            bindEvents(slider);
        }

        function move(slider, direction, clickEvent) {
            var widthMove = $('.slide').outerWidth( true );

            if (direction === "left") {
                i += 1;
            } else {
                i -= 1;
            }

            slider.css('transform', 'translate3D('+ widthMove*i + 'px, 0 ,0)');
        }

        function touchMove(elm) {
            console.log('render', elm)
        }

        return this.each(function() {
            var $this = $(this);

            if ( options ) {
                $.extend( settings, options );
            }

            renderSlider($this);
            autoSlide($this);
        });
    };
})(jQuery);
