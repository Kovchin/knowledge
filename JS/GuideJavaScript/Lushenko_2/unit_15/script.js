// task 1 --------------------
//Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.
//Одномерный массив так можно создать без дублирования значений однако если создать set из одинаковых массивов он это с радостью проглотит.

let set1 = new Set(),
    arr1 = [1, 2, 3];

set1.add(1);
set1.add(2);
set1.add([1, 2, 3]);
set1.add(arr1);
set1.add(arr1);
set1.add('test');
set1.add(true);
set1.add({ 'Hello': 'World' });
set1.add({ 'Hello': 'World' });

show(set1, 'task1');

//task2 --------------------
//Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.

let set2 = new Set(),
    bnt2 = document.querySelector('#task-15-2 .add'),
    inp2 = document.querySelector('#task-15-2 input[type=text]');

bnt2.onclick = () => {
    if (checkInput(inp2)) {
        set2.add(inp2.value.trim());
        show(set2, 'task2');
        t5(set2);
    }
}

//task3
//Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).

let btn3 = document.querySelector('#task-15-2 .rmv');

btn3.onclick = () => {
    if (checkInput(inp2)) {
        set2.delete(inp2.value.trim());
        show(set2, 'task3');
        t5(set2);
    }
}

/* 
Функция выдает console.log(value) завернутое в group
*/
function show(value, nameGroup) {
    console.group(nameGroup);
    console.log(value);
    console.groupEnd(nameGroup);
}

/* 
Функция проверяет значение inp.value.trim()

Если поле ввода пустое выводится Alert и на выход передается false
если значение существует то return true
*/
function checkInput(inp) {
    if (inp.value.trim() === '') {
        alert('Вы не ввели значение');
        return false;
    }
    else
        return true;
}

//task 4 
//Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 

let btn4 = document.querySelector('#task-15-2 .check');

btn4.onclick = () => {
    if (checkInput(inp2)) {
        show(t4(set2, inp2), 'task4');
        t5(set2);
    }
}

function t4(set, inp) {
    if (set.has(inp.value.trim()))
        return true;
    else
        return false;
}

//task5
//Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции. Действия должны запускаться при вызове функции t5.

let out5 = document.querySelector('#task-15-2 .out');

function t5(set) {
    out5.textContent = `Размер текущего сэта set2 = ${set.size}`;
}

//task6
//Есть массив a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set. Действия должны запускаться при вызове функции t6. 

let a6 = [3, 4, 3, 2, 4, 56, 1, 23],
    out6 = document.querySelector('#task-15-6 .out');


function f6(arr) {
    let res = new Set(arr);
    show(res, 'task6');
    out6.innerHTML = `Массив arr = [${arr}] <br> Количество уникальных значений в arr = ${res.size}`;
}

f6(a6);

//task7
//Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split(')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set.

let inp7 = document.querySelector('#task-15-7 input'),
    btn7 = document.querySelector('#task-15-7 button');

btn7.onclick = () => {

    if (checkInput(inp7)) {
        let str = inp7.value.trim(),
            arr = str.split(''),
            set = new Set(arr);

        if (arr.length === set.size)
            alert('Вы ввели корректный пароль');
        else
            alert('Вы ввели не корректный пароль все символ должны быть уникальны');
    }
}

//task8
//Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. 

let a8 = createSet(10),
    b8 = document.querySelector('#task-15-8 button'),
    out8 = document.querySelector('#task-15-8 .out');



b8.onclick = () => {
    f8(a8);
}

/*
Генерирует Set из count значений
*/

function createSet(count) {
    let res = new Set();
    if (count >= 1000)
        return false;
    while (res.size < count) {
        res.add(Math.floor(Math.random() * 1000));
    }
    return res;
}

/*
Функция преобразует Set в строку 
*/

function showSet(set) {
    let res = '';

    for (let value of set) {
        res += `${value}, `;
    }
    return res;
}

/*
Функция выполняющая условия задания
*/
function f8(set) {
    let a8_res = new Set(),
        i = 0;

    for (let item of set) {
        if (i % 2 === 0) {
            a8_res.add(item);
        }
        i++;
    }
    out8.innerHTML = `Исходный массив = ${showSet(a8)} <br> Массив после преобразования = ${showSet(a8_res)}`;
}

//task9
//Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.

let a9 = createSet(20),
    a9_res = new Set(),
    out9 = document.querySelector('#task-15-9 .out');

function t9(set) {
    let res = [],
        i = set.size;

    for (let value of set) {
        i--;
        res[i] = value;
    }
    res = new Set(res);

    return res;
}

out9.innerHTML = `Исходный set = ${showSet(a9)} <br> После преобразования = ${showSet(t9(a9))}`;

//task10

/*!!!
В тексте задания ошибка!
a20_res в предпоследнем предложении нужно заменить на a10_res
!!!*/

/*
Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. 
Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. 
Результат присвойте массиву a10_res. 
Логика решения: создайте на основе массива - набор. 
Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и 
смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. 
После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик. 
a10_res = { "3" : 5, "1" : 1, } 
*/

let a10 = createArray(20),
    set10 = new Set(a10),
    a10_res = {};

//Вспомогательная функция создающая массив из случайных чисел до 10-ти
function createArray(count) {
    let res = [];
    for (let i = 0; i < count; i++) {
        res[i] = Math.floor(Math.random() * 10);
    }
    return res;
}

//Нет так и страшен оказался орешек. Тем более когда Вы по шагам описали что делать. )
function f10() {

    for (value of set10) {
        let counter = 0;
        for (let i = 0; i < a10.length; i++)
            if (a10[i] === value)
                counter++;

        a10_res[value] = counter;
    }
}

f10();

show(a10, 'task10');
show(a10_res, 'task10');

//task11

//Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу. 

let i_11 = document.querySelector('#task-15-11 .i-11'),
    b_11 = document.querySelector('#task-15-11 .b-11'),
    out_11 = document.querySelector('#task-15-11 .out'),
    a11_res = [];

function t11() {

    for (let i = 0; i < a11_res.length; i++) {
        if (i_11.value === a11_res[i])
            return a11_res;
    }
    a11_res.push(i_11.value);
    return a11_res;
}

b_11.onclick = () => {
    out_11.innerHTML = `a11_res = ${t11()}`;
}

//task12

//Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12. 

let a12_res = new Set([1, 2, 3, 4, 5]),
    btn12 = document.querySelector('#task-15-12 button'),
    out12 = document.querySelector('#task-15-12 .out');

function t12(data) {

    let res = [],
        i = 0;

    for (let value of data) {
        i++
        res.push(value);
    }

    a12_res = res;

    return a12_res;
}

btn12.onclick = () => {

    out12.innerHTML = `a12_res = [${t12(a12_res)}]`;
}

//task13

//Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Действия должны запускаться при вызове функции t13. 

let btn13 = document.querySelector('#task-15-13 button'),
    out13 = document.querySelector('#task-15-13 .out'),
    set13 = new Set([1, 2, 3, 4, 5, 6]);

function t13(set, out) {
    out.innerHTML = `Вывод set в указанный элемент <br>`;

    for (let value of set) {
        out.innerHTML += `${value}, `;
    }

    return true;
}

btn13.onclick = () => {
    t13(set13, out13);
}

//task14

//Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. Действия должны запускаться при вызове функции t14. Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов). 

let btn14 = document.querySelector('#task-15-14 button'),
    out14 = document.querySelector('#task-15-14 .out'),
    select14 = document.querySelector('#task-15-14 select')
set14 = new Set([1, 2, 3, 4, 5, 6]);

function t14(set, out, separator) {
    out.innerHTML = `Вывод set в указанный элемент <br>`;

    for (let value of set) {
        out.innerHTML += `${value}${separator.value}`;
    }

    return true;
}

btn14.onclick = () => {
    t14(set14, out14, select14);
}

//task15

//Дан массив arr15 = [ [1,0], [1,0], [2,0] ] . Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор a15_res выведите на страницу. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res. 

//Этот вопрос меня заинтересовал в первом задании собственно там я и полуил на него ответ. :-)

let arr15 = [[1, 0], [1, 0], [2, 0]],
    set15 = new Set,
    out15 = document.querySelector('#task-15-15 .out');

function t15() {
    for (let i = 0; i < arr15.length; i++) {
        for (let j = 0; j < arr15[i][j]; j++)
            set15.add(arr15[i][j]);
    }

    out15.innerHTML = `<h3>Вывод set15</h3>`
    for (let value of set15)
        out15.innerHTML += `${value} <br>`;
}

t15();

//task16

//Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор выведите в консоль. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a16_res. 

let a16 = [{ Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 }],
    a16_res = new Set;

function t16() {
    for (let i = 0; i < a16.length; i++) {
        a16_res.add(a16[i])
    }
    show(a16_res, 'task16');
}

t16();

//task17

//Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат. Действия должны запускаться при вызове функции t17. 

let u17 = 'Primer';

function t17() {
    let set17 = new Set(u17);
    show(set17, 'task17');
}

t17();

//task18

//Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18. 

let a18 = [5, 7, 9, 11, 13, 15],
    out18 = document.querySelector('#task-15-18 .out');

//Именно этот массив можно обойти найдя индексы через indexOf, но метод не универсальный так как этот метод выает индекс первого вхождения в массив по значению. (тут либо через дополнительны массив либо колечить этот удаляя вложения)
//В этой задаче проще было обойтись обычным перебором через for (let i=0; i<a18.length; i++) console.log(`${i} - ${a18[i]}`);

function t18() {
    let res = '';
    for (let value of a18) {
        res += (`${a18.indexOf(value)} - ${value} <br>`);
    }
    return res;
}

out18.innerHTML = t18();

//task19

//Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора. Действия должны запускаться при вызове функции t19. 

let out19 = document.querySelector('#task-15-19 .out'),
    set19 = createSet(10);

function t19(out, set) {

    let str = '',
        i = 0;

    for (let value of set) {

        i++;

        if (i % 2) {
            str += `${value} <br>`;
        }
    }

    out.innerHTML = str;

    return true;
}

show(set19, 'task19');

t19(out19, set19);

//task20 Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.

let arr20 = createArray(10),
    s20_res = new Set,
    s21_res = new Set,
    out20 = document.querySelector('#task-15-20 .out');

function t20() {

    let i = 0;

    console.log(`Изначальный массив = ${arr20}`);

    while (i < arr20.length) {
        if (i % 2)
            s21_res.add(arr20[i]);
        else
            s20_res.add(arr20[i]);

        i++;
    }
    console.log(s20_res);
    console.log(s21_res);
}

t20();