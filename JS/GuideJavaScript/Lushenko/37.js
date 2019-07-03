window.onload = function () {
/*===========
Инициализация
===========*/ 

//достаем блоки left и right
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');

//накручиваем обработчик на изменение размеров окна
    window.onresize = equalHeight;

//запускаем функцию пересчета размеров блоков
    equalHeight();

/*
функция пересчета размеров блоков
*/
    function equalHeight() {
//Задаем автоматическую высоту блоков
        left.style.height =  'auto';
        right.style.height = 'auto';  

//Получаем высоты блоков и находим максимальную высоту
        var ll = left.offsetHeight;
        var rr = right.offsetHeight;
        var mm = Math.max(ll,rr);
        
//Присваиваем высоту обоих блоков максимальной высоте
        left.style.height =  mm + 'px';
        right.style.height =  mm + 'px';
    }
}