//получаем все параграфы в классе block
var myp = $('.block p');
//создаем переменную в которую кладем название одного из 2-ух цветов
var mycolor = 'darkred';
//функция смены цвета с синего на красный и наоборот
function changecolor() {
    //Присваиваем всем выбранным параграфам цвет mycolor
    myp.css('color', mycolor);
    if (mycolor == 'darkred')
        mycolor = 'darkblue';
    else
        mycolor = 'darkred';
}
//циклический запуск функции выше
setInterval(changecolor, 1000);