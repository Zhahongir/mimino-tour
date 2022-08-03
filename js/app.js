// Call Back
$(document).ready(function() { 

    $('[data-modal=callBack]').on('click', function() {
        $('.call').fadeIn();
    });
    $('.call__wrap__close').on('click', function() {
        $('.call').fadeOut();
    });
});

// Call Back Excursion
$(document).ready(function() { 

    $('[data-modal=callExcursion]').on('click', function() {
        $('.call').fadeIn();
    });
    $('.call__wrap__close').on('click', function() {
        $('.call').fadeOut();
    });
});