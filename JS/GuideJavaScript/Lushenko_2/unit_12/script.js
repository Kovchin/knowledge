/*
task 1 --------------------
Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
*/

let out1 = document.querySelector('#task-12-1 .out')

const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

function showarr(arr, out) {
    out.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            out.innerHTML += `${arr[i][j]} `;
        }
        out.innerHTML += `<br>`;
    }
}

showarr(a, out1);

/*
task 2 --------------------
Выведите на страницу символ 3 из массива a.
*/

let out2 = document.querySelector('#task-12-2 .out');

out2.innerHTML = `a[0][2] = ${a[0][2]}`;

/*
task 3 --------------------
Выведите на страницу символ e из массива a.
*/

let out3 = document.querySelector('#task-12-3 .out');

out3.innerHTML = `a[3][1] = ${a[3][1]}`;

/*
task 4 --------------------
Выведите на страницу содержимое третьего вложенного массива в массиве a.
*/

let out4 = document.querySelector('#task-12-4 .out');

out4.innerHTML = `a[2] = ${a[2]}`;

/*
task 5 --------------------
Выведите на страницу только первые элементы вложенных массивов массива a.
*/

let out5 = document.querySelector('#task-12-5 .out');

function getFirst(arr) {
    let res = '';

    for (let i = 0; i < arr.length; i++)
        res += `${arr[i][0]}, `;

    return res;
}

out5.innerHTML = getFirst(a);

/*
task 6 --------------------
Выведите на страницу только четные вложенные массивы массива a.
*/

let out6 = document.querySelector('#task-12-6 .out');

function getEven(arr) {
    let res = '';

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            res += arr[i];
        }
        res += `<br>`;
    }

    return res;

}

out6.innerHTML = getEven(a);

/*
task 7 --------------------
Выведите на страницу только числа из массива a.
*/

let out7 = document.querySelector('#task-12-7 .out');

function getNum(arr) {
    let res = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (typeof (arr[i][j]) == 'number') {
                res += `${arr[i][j]} `;
            }
        }
    }

    return res;

}

out7.innerHTML = `Числа из массива а = ${getNum(a)}`;


/*
task 8 --------------------
Выведите на страницу длины вложенных массивов в массив a.
*/
let out8 = document.querySelector('#task-12-8 .out');

function getLength(arr) {
    let res = '';

    for (let i = 0; i < arr.length; i++) {
        res += `Длинна ${i} вложенного массива = ${arr[i].length} `;
        res += `<br>`;
    }
    return res;
}

out8.innerHTML = getLength(a);

/*
task 9 --------------------
Выведите на страницу элементы массива a в обратном порядке, т.е.
*/
let out9 = document.querySelector('#task-12-9 .out');

function inveseArr(arr) {
    let res = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--)
            res += `${arr[i][j]} `;
    }

    return res;

}

out9.innerHTML = inveseArr(a);

/*
task 10 --------------------
Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
*/
let out10 = document.querySelector('#task-12-10 .out');

function inverseArr2(arr) {
    let res = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--)
            res += `${arr[i][j]} `;
        res += `<br>`;
    }
    return res;
}

out10.innerHTML = inverseArr2(a);

/*
task 11 --------------------
Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
*/

let out11 = document.querySelector('#task-12-11 .out'),
    chess = createChess();

function createChess() {
    let k = 1,
        res = [];

    for (let i = 0; i < 8; i++) {

        let row = [];
        if (i % 2 === 0)
            k = 0;
        else
            k = 1;

        for (let j = 0; j < 8; j++) {

            if (k % 2 === 0)
                row.push(0);
            else
                row.push(1);

            k++;
        }
        res.push(row);
    }

    return res;

}

showarr(chess, out11);

/*
task 12 --------------------
Создайте массив шахматную доску. Белые - 0, черные - 1.
Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закрашенные цветом.
*/
let out12 = document.querySelector('#task-12-12 .chess');

function showChessBoard(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            temp = '';
            temp = document.createElement('div');
            temp.dataset.positionX = i;
            temp.dataset.positionY = j;
            if (arr[i][j] == 0)
                temp.classList.add('white');
            else
                temp.classList.add('black');

            out12.appendChild(temp);

        }
    }
}

showChessBoard(chess);

/*
task 13 --------------------
Создайте массив, который подходит под следующие условия:
b[0][1] == 4;
b[3][2] == 5
*/
let b = [
    [2, 4],
    1,
    2,
    [2, 4, 5],
];

console.log(`b[0][1] = ${b[0][1]}`);
console.log(`b[3][2] = ${b[3][2]}`);

/*
task 14 --------------------
Создайте массив, который подходит под следующие условия:
c[0][1] == 4;
c[2] == 5
*/
let c = [
    [2, 4],
    1,
    5,
    [2, 4, 5],
];

console.log(`c[0][1] = ${c[0][1]}`);
console.log(`c[2] = ${c[2]}`);

/*
task 15 --------------------
Создайте массив, который подходит под следующие условия:
d[0][1] == 4;
d[2][3] == 5
d[6] = [4,5]
*/
let d = [
    [0, 4],
    0,
    [0, 0, 0, 5],
    0,
    0,
    0,
    [4, 5],
]

console.log(`d[0][1] = ${d[0][1]}`);
console.log(`d[2][3] = ${d[2][3]}`);
console.log(`d[6] = ${d[6]}`);

/*
task 16 --------------------
Создайте массив, который подходит под следующие условия:
e[0][1] == 4;
e[2][3] == 5
e[6][0][1] = 6;
*/
let e = [
    [0, 4],
    0,
    [0, 0, 0, 5],
    0,
    0,
    0,
    [[0, 6]],
]

console.log(`e[0][1] = ${e[0][1]}`);
console.log(`e[2][3] = ${e[2][3]}`);
console.log(`e[6][0][1] = ${e[6][0][1]}`);

/*
task 17 --------------------
Создайте массив, который подходит под следующие условия:

Да вы шутник Александр... ) Дальше нужно четырехмерный массив давать его головой представить уже невозможно. Пользоваться без проблем но представить...

f[0][1][3] == 4;
f[2][1][1] == 5
f[6][0][1] = 6;
*/
let f = [
    [0, [0, 0, 0, 4]],
    1,
    [0, [0, 5]],
    3,
    4,
    5,
    [[0, 6]],
]

console.log(`f[0][1][3] = ${f[0][1][3]}`);
console.log(`f[2][1][1] = ${f[2][1][1]}`);
console.log(`f[6][0][1] = ${f[6][0][1]}`);

/*
task 18 --------------------
Создайте массив, который подходит под следующие условия:

g[0][1][3] == 4;
g[2][1][3] == 5
g[6][0][1] = 6;
g[3] == g[5];
*/
let g = [
    [0, [0, 0, 0, 4]],
    1,
    [0, [0, 0, 0, 5]],
    3,
    4,
    3,
    [[0, 6]],
]

console.log(`g[0][1][3] = ${g[0][1][3]}`);
console.log(`g[2][1][3] = ${g[2][1][3]}`);
console.log(`g[6][0][1] = ${g[6][0][1]}`);
console.log(`g[3] = ${g[3]}`);
console.log(`g[5] = ${g[5]}`);

/*
task 19 --------------------
Выведите на страницу сумму элементов массива a (только чисел).
*/
let out19 = document.querySelector('#task-12-19 .out');

function getSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof (arr[i][j]) == 'number') {
                res += arr[i][j];
            }
        }
    }
    return res;
}

out19.innerHTML = `Сумма всех числовых элементов массива ${a} = ${getSum(a)}`;

/*
task 20 --------------------
Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выигрышные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.
*/

//Очень интересное получилось задание
//По времени 2 дня бился.
//В принципе при той базе что получил с Ваших курсов с неделю посидеть можно и шахматы с шашками реализовать для доски что повыше...

let board = [],
    symbols = ['X', 'O'],
    out20 = document.querySelector('#task-12-20 .board'),
    step = 0;

/*
Отирсовка стартового поля 
назначение обработчика событий на каждую клетку поля "setSymbol"
назначение класса ячейкам для отображения поля
*/

function createBoard() {
    let cell = '';

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
            cell = '';
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.onclick = setSymbol;
            out20.appendChild(cell);
        }
}

//Отрисовка актуального на данный ход знака (определяется по глобальной переменной step если значение четное то X иначе O)

function setSymbol() {
    if (this.innerHTML === '') {
        this.innerHTML = checkSymbol(step);

        board = setArray();

        //Проверка на условия победы

        for (let i = 0; i < symbols.length; i++)

            if (checkWin(board, symbols[i])) {
                alert(`Победили ${symbols[i]}`);
                clearBoard();
            }

        step++;
    }
}

/*
Чередование крестив и ноликов 
В зависимости от текущего хода (глобальная переменная step) определяет какой знак сейчас ставить
*/

function checkSymbol(step) {
    res = ''
    if (step % 2 == 0) {
        res = symbols[0];
    }
    else {
        res = symbols[1];
    }
    return res;
}

//Создание массива на основании действующего поля

function setArray() {
    let board = Array.from(document.querySelectorAll('#task-12-20 .cell')),
        arr = [],
        temp = [],
        k = 0;

    for (let i = 0; i < 3; i++) {
        temp = [];
        for (let j = 0; j < 3; j++) {
            temp[j] = board[k].innerHTML;
            k++;
        }
        arr[i] = temp;
    }
    return arr;
}

/*
Условия победы
*/

function checkWin(board, symbol) {
    if (
        //Горизонтали
        (board[0][0] == symbol && board[0][1] === symbol && board[0][2] === symbol) ||
        (board[1][0] == symbol && board[1][1] === symbol && board[1][2] === symbol) ||
        (board[2][0] == symbol && board[2][1] === symbol && board[2][2] === symbol) ||
        //Вертикали
        (board[0][0] == symbol && board[1][0] === symbol && board[2][0] === symbol) ||
        (board[0][1] == symbol && board[1][1] === symbol && board[2][1] === symbol) ||
        (board[0][2] == symbol && board[1][2] === symbol && board[2][2] === symbol) ||
        //Кресты
        (board[0][0] == symbol && board[1][1] === symbol && board[2][2] === symbol) ||
        (board[0][2] == symbol && board[1][1] === symbol && board[2][0] === symbol)
    ) {
        return true;
    }

    else if (step == 8) {
        alert('Ничья');
        clearBoard();
    }
}

/*
Функция для очистки поля. Применяется при победе одного из игроков либо при заполнении всего поля
*/

function clearBoard() {
    for (let i = 0; i < out20.childNodes.length; i++)
        out20.children[i].innerHTML = '';
    step = -1;
}

createBoard();