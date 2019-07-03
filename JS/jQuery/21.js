/*=============
    Урок
=============*/
$(document).ready(function () {
    // Накручиваем обрабтчик событий onclick на все div в блоке lesson
    $('#lesson div').bind('click', incSize);
    //Функция увеличивающая размер блока на 20 либо сбрасывающая обработчик событий если ширина стала больше 1000
    function incSize(event) {
        var DivWidth = event.target.style.width;
        console.log('event.target.style.width = ' + DivWidth);
        if (DivWidth < 10) {
            DivWidth = '100px';
        }
        else
            DivWidth = Number(DivWidth.substring(0, DivWidth.length - 2)) + 20 + 'px';
        event.target.style.width = DivWidth;
        console.log('DivWidth = ' + DivWidth);
        //Если имы накликали ширину блока больше 1000 сбрасываем обработчик событий onclick
        if (Number(DivWidth.substring(0, DivWidth.length - 2)) > 1000) {
            $(event.target).unbind();
        }
    }
    function Nav(){
        console.info(window.navigator);
        console.info(window.navigator.javaEnabled());
    }
    Nav();
});

/*=============
    Задание
=============*/

$('.example div').on('click', createDiv);

function createDiv(event){
    var NewDiv = $(event.target).clone();
    $(NewDiv).attr('id','bigDiv');
    $(NewDiv).css('background-color',$(event.target).css('background-color'));
    $(NewDiv).bind('click',removeDiv);
    $('.example').append(NewDiv);
}

function removeDiv(event){
    $(event.target).remove();
}