var questNumber = Math.floor(10 * Math.random() + 1);
var inputNumber;
var chants = 5;

//вывод количества попыток 
document.getElementById('chants').innerHTML = chants;

//функция проверки введенного числа
document.getElementById('check').onclick = function () {
    //Присваиваем переменной inputNumber введенное нами число
    inputNumber = parseInt(document.getElementById('text').value);

    if (chants > 0) {

        if (questNumber > inputNumber) {
            document.getElementById('help').innerHTML = 'меньше загаданного программой';
            chants--;
        }
        else if (questNumber < inputNumber) {
            document.getElementById('help').innerHTML = 'больше загаданного программой';
            chants--;
        }
        else {
            document.getElementById('help').innerHTML = 'совпало с загаданным.'
            alert('УРА Вы выиграли!!!');
            location.reload();
        }
        document.getElementById('chants').innerHTML = chants;
    }
    else {
        alert('Вы проиграли. :-(');
        location.reload();
    }
}