(function( $ ) {
    'use strict';

    $.fn.myParallax = function(options) {

        return this.each(function() {
            var $this = $(this);

            $(document).on('scroll', parallax);

            function parallax() {
                console.log($this.position().top)
            }
        });
    };
})(jQuery);
