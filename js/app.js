$(document).ready(function(){

    alert($('.container').length);
    var rows = 50;
    var cols = 50;
    var number_of_squares = rows * cols;
    var container_size = 500;

    for (var i = 0; i < number_of_squares; i++) {
        $('.container').append('<div class="square"></div>');
    }
    $(".square").css({
        'height': '10px',
        'width': '10px',
        'display': 'inline-block',
        'position': 'relative',
        'float': 'left'
    });

    $(".square").on('mouseenter', function() {
        $(this).addClass('highlighted');
    });

    $("button").on('click', function() {
        $(".square").removeClass('highlighted');
    });


});
