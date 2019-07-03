//номер хода (используется для проверки что ставить крестик или нолик)
var hod = 0;
//Создает поле для игры
createPole();
//Назначаем обработчик onclick при клике на поле (это по сути и есть игра)
document.getElementById('pole').onclick = function (event) {
    //Проверяем наличие текста в выбранном поле если там пусто то продолжаем работу программы.
    if (event.target.innerHTML == '') {
        //Проверяем четность хода. Если ход четный то ставим крестик если не четный то 0.
        if (event.target.className == 'block') {
            if (hod % 2 == 0)
                event.target.innerHTML = 'x';
            else
                event.target.innerHTML = '0';
            //Добавляем счетчик ходов и проверяем условия победы.
            hod++;
            checkWinner();
        }
    }
}
//Функция создания поля
function createPole() {
    for (var i = 0; i < 9; i++)
        document.getElementById('pole').innerHTML += '<div class="block"></div>';
}
//Функция проверки условий победы
function checkWinner() {
    var allblock = document.getElementsByClassName('block');
    /*======================
    условия победы крестиков
    ======================*/
    if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x')
        alert('Победили крестики');
    if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x')
        alert('Победили крестики');
    /*====================
    условия победы ноликов
    ====================*/
    if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0')
        alert('Победили нолики');
    if (allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0')
        alert('Победили нолики');
}

