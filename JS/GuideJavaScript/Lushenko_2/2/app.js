/*
Очень приятно получить от Вас обратную связь по выполненным заданиям.
Вернусь из командировки обязательно куплю остальные Ваши курсы только из-за возможности менторства.
Единственно не понял, как вести обратный диалог что бы лишнего не перегружать Вас информацией, так как простая математика по количеству 
одновременно проходящих Ваши курсы помноженное на количество домашних заданий выходит жуткая нагрузка на человека. :-)
У Вас лучший подход к обучению что я встречал на просторах интернета, в этой тематике, искренне надеюсь, что задуманное Вами в реализации выходит 
близко к ожидаемому результату. 
Очевидно, что при подобном подходе скоро Вы утонете в количестве заданий на проверку потом для проверки нужно будет набрать штат, а 
это в результате уже совсем другой подход к ведению дел.
*/

/*=======================
task 1
Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
=======================*/
let a = 7;
let b = 9;
console.log(7 * 9);

/*=======================
task 2
Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
=======================*/
let c = 7;
let d = 9;
document.querySelector('#div2').innerText = c / d;

/*=======================
task 3
Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
=======================*/
let e = 3;
let f = 5;
document.querySelector('#div3').innerText = e + f;

/*=======================
task 4
Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
=======================*/
let e1 = '3';
let f1 = 5;
document.querySelector('#div4').innerText = e1 + f1;

/*=======================
task 5
Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
=======================*/
let e2 = 3;
let f2 = 0;
document.querySelector('#div5').innerText = e2 / f2;

/*=======================
task 6
Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
=======================*/
let e3 = 3;
let f3 = 'Hello';
document.querySelector('#div6').innerText = e3 + f3;

/*=======================
task 7
Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
=======================*/
let e4 = 3;
let f4 = 'Hello';
document.querySelector('#div7').innerText = e4 * f4;

/*=======================
task 8
Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
=======================*/
let button8 = document.querySelector('#div8 button');
button8.onclick = function () {
    console.log(document.querySelector('#div8 input').value);
};

/*=======================
task 9
Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
=======================*/
let button9 = document.querySelector('#div9 button');
button9.onclick = function () {
    document.querySelector('#div9 .out').innerText = document.querySelector('#div9 input').value;
    document.querySelector('#div9 input').value = '';
};

/*=======================
task 10
Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
=======================*/
let button10 = document.querySelector('#div10 button');
button10.onclick = function () {
    document.querySelector('#div10 .out').innerText = document.querySelector('#div10 input').value * 10;
};

/*=======================
task 11
Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
=======================*/
let button11 = document.querySelector('#div11 button');
button11.onclick = function () {
    document.querySelector('#div11 .out').innerText = +document.querySelector('#div11 input').value + 10;
};

/*=======================
task 12
Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
=======================*/
let button12 = document.querySelector('#div12 button');
button12.onclick = function () {
    console.log('Hello ' + document.querySelector('#div12 .name').value + ' ' + document.querySelector('#div12 .surname').value);
};

/*=======================
task 13
Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
=======================*/
let button13 = document.querySelector('#div13 button');
button13.onclick = function () {
    document.querySelector('#div13 .out').innerText = +document.querySelector('#div13 .x').value + +document.querySelector('#div13 .y').value;
};

/*=======================
task 14
Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'. 
=======================*/
document.querySelector('#div14 input').value = 'Hello';

/*=======================
task 15
Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции. 
=======================*/
let y = document.querySelector('#div15 input');
y.style.border = '2px solid red';

/*=======================
task 16
Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
=======================*/
let button16 = document.querySelector('#div16 button');
button16.onclick = function () {
    document.querySelector('#div16 .out').innerText = +document.querySelector('#div16 .x').value + +document.querySelector('#div16 .y').value;
};

/*=======================
task 17
Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
=======================*/
let button17 = document.querySelector('#div17 button');
button17.onclick = function () {
    let t = document.querySelector('#div17 input').value;
    t = parseInt(t);
    console.log(t);
};

/*
task18
Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

На этом уроке мне в голову пришла мысль зачем отделять задание от реализации и почему вывод такой сухой
все вопросы типовые и вывод похожий, можно же навестить css и сделать страницу чуть веселее.
Заодно Вы, посмотрев готовый результат подскажете как делать корректно.
В этом случае читать готовый результат будет приятнее, а тут я уже не буду нарушать стилистику.
Это не сильно усложниит Вам задачу по проерке ДЗ?
*/
let button18 = document.querySelector('#div18 button');
button18.onclick = function () {
    let t = document.querySelector('#div18 input').value;
    t = parseFloat(t);
    console.log(t);
};

/*=======================
task 19
Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел.
Не понял чем это задание отличается от 16-го потому просто скопипастил. :-)
=======================*/
let button19 = document.querySelector('#div19 button');
button19.onclick = function () {
    document.querySelector('#div19 .out').innerText = +document.querySelector('#div19 .x').value + +document.querySelector('#div19 .y').value;
};

/*=======================
task 20
Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
=======================*/
let button20 = document.querySelector('#div20 button');
button20.onclick = function () {
    //достаем данные из инпутов
    let surname = document.querySelector('#div20 .surname').value;
    let name = document.querySelector('#div20 .name').value;
    let age = +document.querySelector('#div20 .age').value;
    let profession = document.querySelector('#div20 .profession').value;
    //ссылка на параграф для вывода результата
    let out = document.querySelector('#div20 .out');
    //УРА!!!  
    out.innerText = 'Уважаемый ' + name + ', ' + surname + ', ваш возраст ' + age + ' года, по професси вы ' + profession;
};
