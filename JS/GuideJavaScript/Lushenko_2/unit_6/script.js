// task 1 --------------------
let out_1 = document.querySelector('#task-1 .execute .out');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++)
        out_1.innerHTML += '*';
    out_1.innerHTML += '  ';
}

// task 2 --------------------
let out_2 = document.querySelector('#task-2 .execute .out');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++)
        out_2.innerHTML += '*';
    out_2.innerHTML += '<br>';
}
//task 3 --------------------
let out_3 = document.querySelector('#task-3 .execute .out');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j % 2 == 0)
            out_3.innerHTML += '1';
        else
            out_3.innerHTML += '0';
    }
    out_3.innerHTML += '<br>';
}

//task 4 --------------------
let out_4 = document.querySelector('#task-4 .execute .out');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j == 3)
            out_4.innerHTML += 'x';
        else if (j % 2 == 0)
            out_4.innerHTML += '1';
        else
            out_4.innerHTML += '0';
    }
    out_4.innerHTML += '<br>';
}

//task 5 --------------------
let out_5 = document.querySelector('#task-5 .execute .out');

for (let i = 1; i <= 3; i++) {
    for (let j = 0; j < i; j++) {
        out_5.innerHTML += '*';
    }
    out_5.innerHTML += '<br>';
}

//task 6 --------------------
let out_6 = document.querySelector('#task-6 .execute .out');

for (let i = 5; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
        out_6.innerHTML += '*';
    }
    out_6.innerHTML += '<br>';
}

//task 7 --------------------
let out_7 = document.querySelector('#task-7 .execute .out pre');
for (let i = 3; i > 0; i--) {
    for (let j = 0; j < 5; j++) {
        if (j == 0) {
            for (let k = 1; k < i; k++)
                out_7.innerHTML += ' ';
        }
        out_7.innerHTML += '*';
    }
    out_7.innerHTML += '<br>';
}

//task 8 --------------------
let out_8 = document.querySelector('#task-8 .execute .out pre');

for (let i = 1; i < 6; i++) {
    let l = '';

    if (i == 1 || i == 5)
        l = 1;
    else if (i % 2 == 0)
        l = 2;
    else l = 3;

    for (let j = 0; j < l; j++) {
        out_8.innerHTML += `*`;
    }
    out_8.innerHTML += `<br>`;
}

//task 9 --------------------
let out_9 = document.querySelector('#task-9 .execute .out pre');

for (let i = 0; i < 5; i++) {

    if (i == 0 || i == 4) {
        for (let j = 0; j < 6; j++) {
            out_9.innerHTML += `*`;
        }
    }
    else {
        out_9.innerHTML += `*`;
        for (let j = 0; j < 4; j++)
            out_9.innerHTML += ` `;
        out_9.innerHTML += `*`;
    }
    out_9.innerHTML += `<br>`;
}

//task 10 -------------------

let out_10 = document.querySelector('#task-10 .execute .out pre');
let inp_10 = document.querySelector('#task-10 .execute input');

inp_10.onchange = () => {

    let v = inp_10.value.trim();

    out_10.innerHTML = '';

    if (v.length > 0) {
        v = v[0];
    }
    else
        alert('Введите символ!');

    inp_10.value = v;

    for (let i = 0; i < 5; i++) {

        if (i == 0 || i == 4) {
            for (let j = 0; j < 6; j++) {
                out_10.innerHTML += `${v}`;
            }
        }
        else {
            out_10.innerHTML += `${v}`;
            for (let j = 0; j < 4; j++)
                out_10.innerHTML += ` `;
            out_10.innerHTML += `${v}`;
        }
        out_10.innerHTML += `<br>`;
    }
}

//task 11 -------------------

let out_11 = document.querySelector('#task-11 .execute .out');

for (let i = 6; i < 8; i++) {
    out_11.innerHTML += `<h3>Таблица умножения на ${i}</h3>`;
    for (let j = 1; j < 10; j++) {
        out_11.innerHTML += `${i} * ${j} = (${i * j}) <br>`;
    }
}

//task 12 -------------------

let out_12 = document.querySelector('#task-12 .out');

for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++)
        out_12.innerHTML += `${j} `;
    out_12.innerHTML += `<br>`;
}

//task 13 -------------------

let out_13 = document.querySelector('#task-13 .execute .out');

for (let i = 1; i <= 50; i++) {
    if (i < 10)
        out_13.innerHTML += `0${i} `;
    else
        out_13.innerHTML += `${i} `;

    if (i % 10 == 0)
        out_13.innerHTML += `<br>`;
}
//task 14 -------------------

let out_14 = document.querySelector('#task-14 .execute .out');

for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        out_14.innerHTML += `${j} `;
    }
    out_14.innerHTML += `<br>`;
}

//task 15 -------------------

let out_15 = document.querySelector('#task-15 .execute .out');

for (let i = 1; i < 6; i++) {
    for (let j = 5; j > 0; j--) {
        if (j > i)
            out_15.innerHTML += `X `;
        else
            out_15.innerHTML += `${j} `;
    }
    out_15.innerHTML += `<br>`;
}

//task 16 -------------------

let out_16 = document.querySelector('#task-16 .execute .out');

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        out_16.innerHTML += `${i} `;
    }
    out_16.innerHTML += `<br>`;
}

//task 17 -------------------

let out_17 = document.querySelector('#task-17 .execute .out');

for (let i = 5; i > 0; i--) {
    for (let j = 5; j >= i; j--) {
        out_17.innerHTML += `${i} `;
    }
    out_17.innerHTML += `<br>`;
}

//task 18 -------------------

let out_18 = document.querySelector('#task-18 .execute .out');

for (let i = 5; i > 0; i--) {
    for (let j = 5; j >= i; j--) {
        if (i % 2 == 0)
            out_18.innerHTML += `X `;
        else
            out_18.innerHTML += `${i} `;
    }
    out_18.innerHTML += `<br>`;
}

//task 19 -------------------

let out_19 = document.querySelector('#task-19 .execute .out');

for (let i = 5; i <= 9; i = i + 2) {
    for (let j = 0; j < i; j++) {
        out_19.innerHTML += `* `;
    }
    out_19.innerHTML += `<br>`;
}
//task 20 -------------------
let out_20 = document.querySelector('#task-20 .execute .out');

for (let i = 1; i < 6; i++) {

    let l = '';

    if (i == 1 || i == 5)
        l = 2;
    else if (i % 2 == 0)
        l = 4;
    else
        l = 6;

    for (let j = 0; j < l; j++) {
        out_20.innerHTML += `* `;
    }

    out_20.innerHTML += `<br>`;
}

