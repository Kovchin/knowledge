//Отступ слева для перемещаемой полосы
var x = 400;

//Назначение обработчика прокрутки колеса мыши в теле документа
document.getElementsByTagName('body')[0].onwheel = scroll;

//Назначение обработчика прокрутки колеса мыши внутри блока frame
document.getElementById('frame').onwheel = move;

//Функция перемещения синей полоски внутри желтого блока
function move(event) {
    x += event.deltaY;
    if (x < 0) x = 0;
    else if (x > 790)
        x = 790;
    document.getElementById('polosa').style.left = x + 'px';
    return false;
}

//Функция отображающая направдение и скорость вращения колеса мыши
function scroll(event) {
    if (event.deltaY > 0)
        document.getElementById('line').innerHTML = 'вверх';
    else
        document.getElementById('line').innerHTML = 'вниз';
    if (Math.abs(event.deltaY) < 0.1)
        document.getElementById('speed').innerHTML = 'медленно';
    else if (Math.abs(event.deltaY) < 1)
        document.getElementById('speed').innerHTML = 'средне';
    else
        document.getElementById('speed').innerHTML = 'быстро';
}