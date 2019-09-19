// task 1 --------------------
function task1() {
    console.log('Pavel');
}

btn1 = document.querySelector('#task-7-1 button');
btn1.onclick = task1;

// task 2 --------------------
function task2(name = 'Ivan') {
    console.log(name);
}

task2('Sergey');

// task 3 --------------------
function task3(x) {
    console.log(`${x} * 10 = ${x * 10}`);
}

task3(5);

let btn3 = document.querySelector('#task-7-3 button');
btn3.onclick = () => {
    task3(10);
}

// task 4 --------------------
function task4() {
    this.style.background = 'red';
}

let btn4 = document.querySelector('#task-7-4 button')
btn4.onclick = task4;

// task 5 --------------------
function getName() {
    let name = document.querySelector('#task-7-5 input').value;
    return `Ваше имя: ${name}`;
}

let inp_5 = document.querySelector('#task-7-5 input');
inp_5.onchange = () => { console.log(getName()); }

// task 6 --------------------
//Интересное задание пришлось разобраться кто же генериреут событие submit. :-)
function task6(x, y) {
    if (x > y)
        return `${x} больше${y}`;
    else if (x < y)
        return `${y} больше ${x}`;
    else
        return `Значения равны`;
}

let inp_6_1 = document.querySelector('#inp_6_1');
let inp_6_2 = document.querySelector('#inp_6_2');

let out_6 = document.querySelector('#task-7-6 .execute .out');

let btn_6 = document.querySelector('#task-7-6 form');

btn_6.onsubmit = (event) => {
    event.preventDefault();

    let x = +inp_6_1.value;
    let y = +inp_6_2.value;

    out_6.innerHTML = task6(x, y);
}

// task 7 --------------------
function task7(x) {
    return 2019 - x;
}

let inp_7 = document.querySelector('#task-7-7 .execute input');

inp_7.onchange = () => {
    let out = document.querySelector('#task-7-7 .execute .out');

    let old = `Ваш возраст ${task7(+inp_7.value)} лет.`;

    out.innerHTML = old;
}

// task 8 --------------------
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

let out8 = document.querySelector('#task-7-8 .execute .out');

out8.innerHTML = `Случайное число = ${randomInteger(1, 10)}`;

//task 9 --------------------
//Функция используется из задания 8

let inp_9_1 = document.querySelector('#inp_9_1');
let inp_9_2 = document.querySelector('#inp_9_2');

let out9 = document.querySelector('#task-7-9 .execute .out');

let form9 = document.querySelector('#task-7-9 form');

form9.onsubmit = (event) => {
    event.preventDefault();

    let x = +inp_9_1.value;
    let y = +inp_9_2.value;

    if (x >= y)
        alert('Проверьте корректность введенных данных');
    else {
        out9.innerHTML = `Случайное число = ${randomInteger(x, y)}`;
    }
}

//task 10 -------------------
function rndColor() {
    return `rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`
}

let out_10 = document.querySelector('#task-7-10 .execute .out');

let color10 = rndColor();

out_10.style.backgroundColor = color10;
out_10.innerText = color10;

//task 11 -------------------
function f11() {
    return 5;
}

function summ(x, y) {
    return x * y;
}

console.log(summ(7, f11()));

//task12 -------------------
function toNum(inp) {
    let x = +inp.value.trim();

    if (isNaN(x)) {
        alert('Введите корректные данные');
        return false;
    }
    else
        return x;
}

inp_12 = document.querySelector('#task-7-12 .execute input');

inp_12.onchange = () => {
    console.log(toNum(inp_12));
}
//task13 -------------------
function emptyInput(inp) {
    let x = +inp.value.trim();

    if (x == '')
        return false;
    else
        return x;
}

let out_13 = document.querySelector('#task-7-13 .execute .out');

let inp_13 = document.querySelector('#task-7-13 .execute input');

inp_13.onchange = () => {
    out_13.innerHTML = emptyInput(inp_13);
}
//task14 -------------------
function task14(x) {
    if (x % 2 == 0)
        return true;
    else
        return false;
}

let inp_14 = document.querySelector('#task-7-14 .execute input');

let out_14 = document.querySelector('#task-7-14 .execute .out');

inp_14.onchange = () => {
    out_14.innerHTML = task14(+inp_14.value.trim());
}
//task15 -------------------
let div = document.querySelector('#task-7-15 .execute div');

div.onmousemove = () => {
    console.log('move');
}
//task16 -------------------
div.onmouseenter = () => {
    console.log('enter');
}

//task17 -------------------
div.onmouseleave = () => {
    console.log('leave');
}

//task18 -------------------
div.onclick = function () {
    this.style.background = 'red';
}
//task19 -------------------
/*
Действительно не работает. )
div.onclick = () => {
    this.style.background = 'red';
}
*/

//task20 -------------------
let go = document.querySelectorAll('.go');

for (let i = 0; i < go.length; i++) {
    go[i].onclick = function () {
        this.style.background = 'red';
    }
}