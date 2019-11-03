// task 1 - 4 --------------------
let out1 = document.querySelector('#task-11-1 .execute .out-1'),
    btn1 = document.querySelector('#task-11-1 .execute .u-2__push'),
    btn2 = document.querySelector('#task-11-1 .execute .u-2__pop'),
    btn3 = document.querySelector('#task-11-1 .execute .u-3__shift'),
    btn4 = document.querySelector('#task-11-1 .execute .u-4__unshift'),
    inp1 = document.querySelector('#task-11-1 .execute .u-1'),
    arr1 = [];

btn1.onclick = () => {
    if (checkInput(inp1) == undefined) return false;
    else {
        arr1.push(checkInput(inp1));
        out1.innerHTML = `Массив: ${arr1}`;
    }
}

btn2.onclick = () => {
    arr1.pop();
    out1.innerHTML = `Массив: ${arr1}`;
}

btn3.onclick = () => {
    arr1.shift();
    out1.innerHTML = `Массив: ${arr1}`;
}

btn4.onclick = () => {
    if (checkInput(inp1) == undefined) return false;
    else {
        arr1.unshift(checkInput(inp1));
        out1.innerHTML = `Массив: ${arr1}`;
    }
}

//Конечно я про это не подумал. )
function checkInput(inp) {
    if (inp.value.trim() != '')
        return inp.value.trim();
    else
        return undefined;
}

// task 5 ---------------------
let btn5 = document.querySelector('#task-11-5 .execute form'),
    arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

btn5.onsubmit = (event) => {
    event.preventDefault();

    let start = +document.querySelector('#inp-5-1').value.trim(),
        delta = +document.querySelector('#inp-5-2').value.trim(),
        out5 = document.querySelector('#task-11-5 .execute .out');

    if ((start + delta) > arr5.length) {
        alert('Выбранный диапазон превышает размер массива');
        return false;
    }
    else {
        arr5.splice(start, delta);
        out5.innerHTML = `arr5[${arr5}]`;
    }
    return arr5;
}
// task 6 ---------------------
let arr6 = [1, 2, 3],
    out6 = document.querySelector('#task-11-6 .out'),
    inp6 = document.querySelector('#inp6');

function funcPush(arr, value) {
    arr[arr.length] = value;
    return arr.length;
}

inp6.onchange = () => {
    funcPush(arr6, inp6.value);
    inp6.value = '';
    out6.innerHTML = `arr6 = [ ${arr6} ]`;
}

// task 7 ---------------------
let out7 = document.querySelector('#task-11-7 .out'),
    btn7 = document.querySelector('#task-11-7 button'),
    arr7 = createArray(20);

function createArray(count) {
    let res = [];
    for (let i = 0; i < count; i++) {
        res[i] = Math.floor((Math.random() * 101));
    }
    return res;
}

out7.innerHTML = `arr7 = [ ${arr7} ]`;

function funcPop(arr) {
    let length = arr.length,
        res = arr[length - 1];

    if (length > 0) {
        arr.length = length - 1;
    }

    return res;
}

btn7.onclick = () => {
    console.log(funcPop(arr7));
    out7.innerHTML = `arr7 = [ ${arr7} ]`;
}

// task 8 ---------------------
let out8 = document.querySelector('#task-11-8 .out'),
    btn8 = document.querySelector('#task-11-8 button'),
    arr8 = createArray(20);

out8.innerHTML = `arr8 = [ ${arr8} ] `;

function funcShift(arr) {
    let res = arr[0];

    if (arr.length == 0)

        return undefined;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;

    return res;
}

btn8.onclick = () => {
    console.log(funcShift(arr8));
    out8.innerHTML = `arr8 = [ ${arr8} ]`;
}

// task 9 ---------------------
let out9 = document.querySelector('#task-11-9 .out'),
    btn9 = document.querySelector('#task-11-9 button'),
    inp9 = document.querySelector('#task-11-9 input'),
    arr9 = createArray(20);

out9.innerHTML = `arr9 = [ ${arr9} ]`;

function funcUnShift(arr, value) {
    let res = arr.length + 1;

    for (let i = arr.length; i > 0; i--)
        arr[i] = arr[i - 1];

    arr[0] = value;

    return res;
}

btn9.onclick = () => {
    console.log(funcUnShift(arr9, inp9.value));
    out9.innerHTML = `arr9 = [ ${arr9} ]`;
}
// task 10 --------------------
let arr10 = [2, 4, 6, 8, 10, 'hello'],
    out10 = document.querySelector('#task-11-10 .out');

out10.innerHTML = `Изначальный массив <br> arr10 = [ ${arr10} ]`;

arr10.reverse();

out10.innerHTML += `<br> После применения метода reverse <br> arr10 = [ ${arr10} ]`;
// task 11 --------------------
let arr11 = [0, 2, 3, 7, 8, 5, 11],
    out11 = document.querySelector('#task-11-11 .out-11'),
    inp11 = document.querySelector('#task-11-11 .u-11__input'),
    btn11 = document.querySelector('#task-11-11 .u-11__button');

btn11.onclick = () => {
    let inp = +inp11.value.trim();

    if (inp === '')
        out11.innerHTML = -1;
    else
        out11.innerHTML = arr11.indexOf(inp);
}

// task 12 --------------------
let arr12 = [0, 2, 3, 7, 8, 5, 11],
    out12 = document.querySelector('#task-11-12 .out'),
    inp12 = document.querySelector('#task-11-12 input');

function funcIndexOf(inp) {
    for (let i = 0; i < arr12.length; i++) {
        if (arr12[i] === inp)
            return i;
    }
    return -1;
}

inp12.onchange = () => {
    out12.innerHTML = funcIndexOf(+inp12.value.trim());
    inp12.value = '';
}

// task 13 --------------------
let arr13_1 = createArray(20),
    arr13_2 = [],
    out13 = document.querySelector('#task-11-13 .out');


function funcReverse(arr) {
    let res = [];
    for (let i = arr.length; i >= 0; i--) {
        res[arr.length - i - 1] = arr[i];
    }
    return res;
}

arr13_2 = funcReverse(arr13_1);

out13.innerHTML = `arr13_1 = [ ${arr13_1} ]`;
out13.innerHTML += `<br>arr13_2 = [ ${arr13_2} ]`;

// task 14 --------------------
//:-) Я функцию createArray написал в первых заданиях этого урока что бы не генерировать массивы руками как оказалось не зря немного диапазон случайных чисел поправил под Ваше условие.
let arr14 = createArray(30),
    out14 = document.querySelector('#task-11-14 .out');
out14.innerHTML = `arr14 = [ ${arr14} ]`;

// task 15 --------------------

let arr15 = createArray(20),
    out15 = document.querySelector('#task-11-15 .out');

out15.innerHTML = `arr15 = [ ${arr15} ]`;

out15.innerHTML += `<br>Четные элементы массива <br> arr = [ ${getEvent(arr15)} ]`;

function getEvent(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            res.push(arr[i])
    }

    return res;
}

// task 16 --------------------
let out16 = document.querySelector('#task-11-16 .out-16'),
    btn16 = document.querySelector('#task-11-16 .u-16__button'),
    arr16_1 = [3, 5, 7],
    arr16_2 = [2, 4, 6];

btn16.onclick = () => {
    console.log('test');
    out16.innerHTML = `Результат команды concat = [ ${arr16_1.concat(arr16_2)} ]`;
}

// task 17 --------------------
let arr17_1 = createArray(5),
    arr17_2 = createArray(5),
    out17 = document.querySelector('#task-11-17 .out');

function funcConcat(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++)
        arr1.push(arr2[i]);
    return arr1;
}
out17.innerHTML = `arr17_1 = [ ${arr17_1} ]`;
out17.innerHTML += `<br>arr17_2 = [ ${arr17_2} ]`;
out17.innerHTML += `<br>arr17_1.concat = [ ${funcConcat(arr17_1, arr17_2)} ]`;

// task 18 --------------------
let arr18 = [3, 5, 7, 11, 12, 13, 14],
    out18 = document.querySelector('#task-11-18 .out-18'),
    inp18 = document.querySelector('#task-11-18 .u-18__input'),
    btn18 = document.querySelector('#task-11-18 .u-18__button');

btn18.onclick = () => {
    if (+inp18.value.trim() === '') {
        out18.innerHTML = 'Вы не введи значение для поиска';
        return false;
    }
    else
        out18.innerHTML = `includes ${inp18.value.trim()} <br>в массиве arr18 [ ${arr18} ] = ${arr18.includes(+inp18.value.trim())}`;

}

// task 19 --------------------
let arr19 = createArray(10),
    inp19 = document.querySelector('#task-11-19 .u-19__input'),
    showarr19 = document.querySelector('#task-11-19 .arr');

showarr19.innerHTML = `arr19 = [ ${arr19} ]`;

function funcIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return true;
    }
    return false;
}

inp19.onchange = () => {

    console.log(arr19);
    console.log(funcIncludes(arr19, +inp19.value.trim()));
}

// task 20 --------------------
let arr20 = createArray(10),
    showarr20 = document.querySelector('#task-11-20 .out-20__array'),
    out20 = document.querySelector('#task-11-20 .out-20'),
    btn20 = document.querySelector('#task-11-20 .u-20__button');

showarr20.innerHTML = `arr20 = [ ${arr20} ]`;

btn20.onclick = () => {
    out20.innerHTML = `Результат метода join на массивом arr20 = ${arr20.join(' - ')}`;
}

