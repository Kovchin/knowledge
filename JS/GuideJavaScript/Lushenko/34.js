//Менять видимость меню при клике мышкой
document.querySelector('#menu').onclick = changeShow;

//Показывать меню при наведении мышм
document.querySelector('#menu').onmouseover = menuShow;

//Скрывать меню при потере фокуса
document.querySelector('#menu').onmouseout = menuHide;

//сменить отображение меню по нажатию клавиши m или убрать при нажатии Escape
window.onkeydown = function (event){
    if(event.keyCode == 77)
    changeShow();
    if(event.code == 'Escape')
    menuHide();
}

//Показать меню
function menuShow(){
    document.querySelector('#menu').style.left = 0 + 'px';
}
//Скрыть меню
function menuHide(){
    document.querySelector('#menu').style.left = -120 + 'px';
}
//Сменить видимость меню (если показано скрыть и наоборот)
function changeShow(){
    if (document.querySelector('#menu').style.left == '0px')
    menuHide();
    else
    menuShow();
}


