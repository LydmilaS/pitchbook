(function( $ ) {
    'use strict';

    $.fn.myParallax = function() {

        return this.each(function() {
            var $this = $(this);

            $(window).on('scroll', function () {
                parallaxAction();
            });

            function parallaxAction() {
                var st = $(window).scrollTop() - $this.offset().top + $this.height();

                $this.css({
                    'background-attachment': 'fixed'
                });
                if ($(window).width() > 767) {

                    $this.find('div').css({
                        'transform': 'translate(0px, ' + st / 3 + 'px)'
                    })
                }

                else {
                    $this.find('div').css({
                        'transform': 'none'
                    })
                }
            }
        });
    };
})(jQuery);

