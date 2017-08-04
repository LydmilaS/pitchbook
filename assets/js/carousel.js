(function( $ ) {
    'use strict';

    $.fn.mySlider = function(options) {
        var settings = {
            transition: 1000,
            count: 3,
            speed: 2000, //ms'
            auto: false,
            pauseOnHover: true
        }, i = -1, autoMove, touchstartX;

        function autoSlide(slider) {
            if(settings.auto) {
                autoMove = setInterval(move.bind(this, slider, 'right'), settings.speed);
            }
        }

        function bindEvents(slider) {
            slider.next().find('.arrow-left').on('click', move.bind(this, slider, 'left'));
            slider.next().find('.arrow-right').on('click', move.bind(this, slider, 'right'));
            slider.closest('.slider-wrap').on('mouseenter', function () {
                if (settings.pauseOnHover) {
                    clearInterval(autoMove);
                }
            });
            slider.closest('.slider-wrap').on('mouseleave', function () {
                autoSlide(slider);
            });
            slider.on('touchstart', function(e) {
                touchstartX = e.touches[0].clientX;
            });
            slider.on('touchend', function(e) {
                var touchendX = e.changedTouches[0].clientX,
                    swipe = touchendX - touchstartX;

                if (swipe > 70) {
                    move($(this), 'left');
                } else if (swipe < 70) {
                    move($(this), 'right');
                }
            });
        }

        function renderSlider(slider) {
            slider.wrap( "<div class='slider-wrap'></div>" );
            $('.slider-wrap').wrap( "<div class='slider-container'></div>" );
            $( '<div class="slider-nav"><button class="arrow-left"></button><button class="arrow-right"></button></div>' ).appendTo( ".slider-wrap" );

            renderClone(slider);
            move(slider, 'right');
            bindEvents(slider);
        }

        function renderClone(slider) {
            var documentFragmentAppend = $(document.createDocumentFragment()),
                documentFragmentPrepend = $(document.createDocumentFragment());

            for (var k = 0; k < settings.count; k++ ) {
                var cloneItemAppend = $(slider.children()[k]).clone(true);
                documentFragmentAppend.append(cloneItemAppend);
            }

            for (var j = slider.children().length - settings.count; j < slider.children().length; j++ ) {
                var cloneItemPrepend = $(slider.children()[j]).clone(true);
                documentFragmentPrepend.append(cloneItemPrepend);
            }

            documentFragmentAppend.appendTo(slider);
            documentFragmentPrepend.prependTo(slider);

            move(slider, 'right');
        }

        function move(slider, direction, clickEvent) {
            var widthMove = slider.find('.slide').outerWidth( true );

            if (direction === "left") {
                i += 1;
            } else {
                i -= 1;
            }

            slider.css({'transform': 'translate3D('+ widthMove*i + 'px, 0 ,0)', 'transition' : settings.transition + 'ms'});

            if (slider.children().length + i === settings.count ) {
                setTimeout(function () {
                    i = -settings.count;
                    slider.css({'transform': 'translate3D('+ widthMove*i + 'px, 0 ,0)', 'transition' : 'initial'});
                }, settings.transition);

            } else if (i === 0) {
                setTimeout(function () {
                    i = -slider.children().length + settings.count*2;
                    slider.css({'transform': 'translate3D('+ widthMove*i + 'px, 0 ,0)', 'transition' : 'initial'});
                }, settings.transition);
            }
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
