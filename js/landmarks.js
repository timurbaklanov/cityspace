$(document).ready(function() {
    var modal = $('.popup'),
                    overlay = $('.overlay'),
                    link = $('button[data-popup="true"]'),
                    close = $('.close-btn');

    close.click(function() {
        modal.toggleClass('popup_active');
        overlay.hide();
    });
    link.on('click', function () {
        overlay.show();
        modal.toggleClass('popup_active');
    });
});







