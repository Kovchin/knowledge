/*
====================================
Для работы этого скрипта необходимо:
====================================
что бы
    у заголовков:
        название класса "tab-h"
    у вкладок
        название класса "tab-b"

Стили вкладкам и их телам задаются в CSS по 3-ем классам active, tab-h и tab-b
*/

//Получаем массив заголовков вкладок
var tab_h = document.querySelectorAll('.tab-h');

//Присваиваем событие onclick на все заголовки вкладок
for (var i = 0; i < tab_h.length; i++) {
    tab_h[i].addEventListener('click', fTabs);
}

//Устанавливаем активным первую вкладу и активируем первый блок вкладок
setActive(0);
//накручиваем data-tab на tab-h
setDT();

//Функция навешивает дополнительный класс "data-tab" на все элементы tab-h и нумерует их с 0 для дальнейшей связки заголовка и тела вкладки
function setDT(){
    for(var i=0; i < tab_h.length; i++){
        document.getElementsByClassName('tab-h')[i].setAttribute('data-tab', i);
    }
}

//Функция делает активной вкладку и тело вкладки в зависимости от параметра num
function setActive(num) {
    document.getElementsByClassName('tab-h')[num].classList.add('active');
    document.getElementsByClassName('tab-b')[num].setAttribute("style", "display: block");
}

//Очистка активности всех заголовков и тел вкладок
function removeActive() {
    for (var i = 0; i < tab_h.length; i++) {
        document.getElementsByClassName('tab-h')[i].classList.remove('active');
        document.getElementsByClassName('tab-b')[i].removeAttribute("style");
    }
}

//Основной обработчик вкладок он сбрасывает все активные вкладки и в зависимости от того на чем кликнули мышкой делает это тело и заголовок вкладок активными
function fTabs(event) {
    removeActive();
    setActive(event.target.getAttribute('data-tab'));
}