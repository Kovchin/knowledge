//Запуск анонимной функции при загрузке страницы
window.onload = function () {
    /*
    Задаем глобальные переменные:
    scrolled: текущее положение скрола страницы
    delta: на сколько прокручивать страницу за единицу времени
    timed: через сколько по времени делать следующий шаг прокрутки
    По сути играя двумя последними параметрами мы управляем скоростью и плавностью прокрутки
    */
    var scrolled;
    var delta = 5;
    var timed = 25;
    var timer;

    //Назначение анонимной функции по нажатию на кнопку    
    document.getElementById('buttonToTop').onclick = function () {
        scrolled = window.pageYOffset;
        //Вызываем функцию плавной прокрутки
        scrollToTop();
    }



    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - delta;
            timer = setTimeout(scrollToTop, timed);
            console.log('delta = ' + delta + ' timed = ' + timed + ' scrolled = ' + scrolled)
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}