// task 1 --------------------
let arr1 = [1, 'Второе значение', NaN, typeof ('Привет'), 5 * 5, `Конкотенация строк = ${5 - 2}`, test, true, [1, 2, 3]];
console.group('task1');
console.info(arr1);
console.groupEnd();

//интересно можно создать массив из функций... :-)
//никогда об этом не задумывался явно для чего то пригодится.s

function test() {
    return 'Hello';
}

// task 2 --------------------
let arr2 = [1, 'test', false],
    out2 = document.querySelector('#task2 .out');

out2.innerHTML = arr2;

//task 3 ---------------------
const arr3 = [2, 'hello', 17, 34, 'privet'];

console.group('task3');
console.info(`Длинна массива ${arr3} = ${arr3.length}`);
console.groupEnd();

//task 4 ---------------------
let out4 = document.querySelector('#task4 .out');

console.group('task4');
console.log(`a[0] = ${arr3[0]} \n a[3] = ${arr3[3]} \n a[8] = ${arr3[8]}`);
console.groupEnd();

out4.innerHTML = `Не назначенные элементы массива = undefined`;

//task 5 ---------------------
console.group('task5');
console.log(`Сумма 0, 2, 3 элемента массива arr3 = ${arr3[0] + arr3[2] + arr3[3]}`);
console.groupEnd();

//task 6 ---------------------
let out6 = document.querySelector('#task6 .out');

arr6 = ['Павел', 'Телец', '05.05.1980', 5];
out6.innerHTML = arr6;

//task 7 ---------------------
let out7 = document.querySelector('#task7 .out'),
    arr7 = ['one', 1, 2, 'two'];

arr7[4] = `hi`;
arr7[5] = `foo`;
arr7[6] = `bar`;

out7.innerHTML = arr7;

//task 8  ---------------------
let out8 = document.querySelector('#task8 .out'),
    arr8_1 = [3.14, 4],
    arr8_2 = ['one', 1, 2, 'two'];

arr8_1[4] = 17;
arr8_1[5] = 5;

out8.innerHTML = arr8_1;
console.group('task8');
console.info(`Массив arr8_1[${arr8_1}]`);
console.info(`Длинна массива arr8_2[${arr8_2}] = ${arr8_2.length}`);
console.groupEnd();

//task 9 ---------------------
let arr9 = [];

for (let i = 0; i < 10; i++)
    arr9[i] = i * 2;

console.group('task9');
console.log(`arr9[${arr9}]`);
//вывел именно 3-ий и 7-ой элемент индекс естественно на 1 ниже
console.log(`arr9[2] = [${arr9[2]}]`);
console.log(`arr9[6] = [${arr9[6]}]`);
console.groupEnd();

//task 10 --------------------
let arr10 = [],
    out10 = document.querySelector('#task10 .out');

arr10[0] = 'Первый элемент массива';
arr10[4] = 'Пятый элемент массива';
arr10[9] = 'Десятый элемент массива';

console.group('task10');
console.log(`arr10[${arr10}] \nдлинна этого массива = ${arr10.length}`);
console.groupEnd();

out10.innerHTML = arr10;

//task 11 --------------------
arr11 = [77, 88, 99, 66],
    out11 = document.querySelector('#task11 .out'),
    btn11 = document.querySelector('#task11 button');

show(arr11, 3, out11);

btn11.onclick = () => {
    let temp = arr11[2];
    arr11[2] = arr11[0];
    arr11[0] = temp;
    show(arr11, 3, out11);
    return arr11;
}

/*
Функция выводит массив/строку arr в зависимости от условия where
1 - в консоль
2 - в out "предполагается что это div на странице"
3 - в консоль и out 
*/
function show(arr, where = '', out = '') {
    switch (where) {
        case 1: {
            console.log(`Массив arr = [${arr}]`);
            break;
        }
        case 2: {
            out.innerHTML = `Массив arr = [${arr}]`;
            break;
        }
        default: {
            console.log(`Массив arr = [${arr}]`);
            out.innerHTML = `Массив arr = [${arr}]`;
            break;
        }
    }
}

//task 12 --------------------
let arr12 = [],
    out12 = document.querySelector('#task12 .out'),
    btn12 = document.querySelector('#task12 button');

for (let i = 0; i < rand(2, 20); i++)
    arr12[i] = rand(0, 100);

show(arr12, 2, out12);

btn12.onclick = () => {
    arr12 = change(arr12);
    show(arr12, 2, out12);
}


//Генератор случайных чисел в диапазоне от min до max c нормальным законом распределения
function rand(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

//Меняет первый и последний элемент массива arr
function change(arr) {
    let temp = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}

//task 13 --------------------
let arr13 = ['y', 4, 22, 'o'],
    out13 = document.querySelector('#task13 .out');

//Функция преобразует массив arr в строку используя знаки табуляции между элементами symbol
function arrShowAsString(arr, symbol) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += `${arr[i]}${symbol}`;
    }
    return res;
}

show(arrShowAsString(arr13, ' '), 2, out13);

//task 14 --------------------
let out14 = document.querySelector('#task14 .out'),
    arr14 = [1, 2, 3, 'hello', 66];

arr14 = inverseArr(arr14);

show(arrShowAsString(arr14, ' '), 2, out14);

//Функция выводит массив в обратном порядке
function inverseArr(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[arr.length - i - 1];
    }

    return res;
}

//task 15 --------------------
let arr15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78],
    out15 = document.querySelector('#task15 .out');

show(arrShowAsString(sort1(arr15), ' '), 2, out15);

//Функция формирует новый массив из arr состоящий из положительных значений
function sort1(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

//task 16 --------------------
let out16 = document.querySelector('#task16 .out');

out16.innerHTML = `Изначальный массив arr15 = [${arr15}]`;
out16.innerHTML += `<br>Четные значения элементов массива = [${sort2(arr15)[0]}]`;
out16.innerHTML += `<br>Не четные значения элементов массива = [${sort2(arr15)[1]}]`;

//Функция разваливает массив на двухмерный res[a1,a2] a1 - четные a2 - не четные
function sort2(arr) {
    let a1 = [],
        a2 = [],
        res = [a1, a2];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            a1.push(arr[i]);
        else
            a2.push(arr[i]);
    }

    return res;
}

//task 17 --------------------
let out17 = document.querySelector('#task17 .out'),
    arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

out17.innerHTML = `Количество 0 в массиве arr17 [${arr17}] = ${check(arr17, 0)}`;

//Функция считает количество элементов symbol в массиве arr
function check(arr, symbol) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == symbol)
            res++;
    }
    return res;
}

//task 18 --------------------
let out18 = document.querySelector('#task18 .out');

out18.innerHTML = `Максимальное значение в массиве arr17[${arr17}] = ${max(arr17)[0]}`;

//Функция возвращает максимальное значение массива (нулевой элемент массива res) и его индекс (Первый элемент массива res)
function max(arr) {
    let res = [arr[0], 0];
    for (let i = 0; i < arr.length; i++) {
        if (res[0] < arr[i]) {
            res = [arr[i], i];
        }
    }
    return res;
}

//task 19 --------------------
let out19 = document.querySelector('#task19 .out'),
    arr19 = [-3, 0, 45, 22, 123, -485, 98, 34];

out19.innerHTML = `Индекс максимального значения в массиве arr19[${arr19}] = ${max(arr19)[1]}`

//task 20 --------------------
let out20 = document.querySelector('#task20 .out');

out20.innerHTML = `Сумма элементов массива arr19[${arr19}] = ${summa(arr19)}`;

function summa(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}