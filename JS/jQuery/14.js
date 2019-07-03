$('.lesson div').css('background-color', 'darkred');
$('.lesson div').css('width', '200px');
$('.lesson div').css('height', function () {
    alert('Ширина ' + $(this).width() + '\n' +
        'Высота ' + $(this).height());
    return $(this).width();
});

$('#more').on('click', moreclick);
$('#less').on('click', lessclick);

function moreclick(){
    $('.test').css('font-size', parseInt($('.test').css('font-size')) + 1 + 'px');
    console.log(parseInt($('.test').css('font-size')) + 1 + 'px');
}

function lessclick(){
    $('.test').css('font-size', parseInt($('.test').css('font-size')) - 1 + 'px');
    console.log(parseInt($('.test').css('font-size')) - 1 + 'px');
}