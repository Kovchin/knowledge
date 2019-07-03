//Поле ввода пароля
var test = document.getElementById('test');
//Переменная в которой хранится пароль
var is = '';

//Функция отображающая в поле ввода случайные латинские буквы но запоминающие истинное введенное значение
test.onkeypress = function (event) {
    is += event.key;
    console.log(is);
    this.value += String.fromCharCode(getRandomInt(65, 122));
    return false;
}

//Функция генерации числа в заданных пределах
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}