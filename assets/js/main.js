$( document ).ready(function() {
    $('.tabs-button a').on('click', function (e) {
        e.preventDefault();
        var clickTab = $(this).attr('data-tab');

        $('.tabs-button a').removeClass('active');
        $(this).addClass('active');

        $('.active-tab-content > div').removeClass('active');
        $('div#' + clickTab).addClass('active');
    })
});