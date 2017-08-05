(function( $ ) {
    'use strict';

    $.fn.myParallax = function(options) {

        return this.each(function() {
            var $this = $(this);

            $(window).on('scroll', function () {
                parallaxAction(false);
            });

            function parallaxAction(timeOut) {
                var st = $(window).scrollTop() - $this.offset().top + $this.height();
                if (timeOut) {
                    var doit;
                    clearTimeout(doit);
                    doit = setTimeout(parallax, 100);
                } else {
                    parallax();
                }


                function parallax() {
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
            }
        });
    };
})(jQuery);

