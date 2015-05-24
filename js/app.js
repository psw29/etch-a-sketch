$(document).ready(function(){

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

    $('#black').on('click', function() {
        $(".square").on('mouseenter', function() {
            $(this).css('background-color', '#111828')
        });
    });

    $('#red').on('click', function() {
        $(".square").on('mouseenter', function() {
            $(this).css('background-color', '#ff4444')
        });
    });

    $('#blue').on('click', function() {
        $(".square").on('mouseenter', function() {
            $(this).css('background-color', '#509ddd')
        });
    });

    $('#green').on('click', function() {
        $(".square").on('mouseenter', function() {
            $(this).css('background-color', '#5ca36a')
        });
    });

    $(".reset").on('click', function() {
        $(".square").css('background-color', 'transparent');
    });

});
