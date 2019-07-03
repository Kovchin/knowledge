//Получаем изменяемый параграф
var elem = $('#myp');
//Накручиваем функцию изменяющую цвет параграфа на radio
$('.radiocolor').on('change', changecolor);
//Функция изменяющая цвет параграфа в зависимости от value выбранной radio
function changecolor(event){
    var clr = $(this).val();
    elem[0].style.color = clr;
}