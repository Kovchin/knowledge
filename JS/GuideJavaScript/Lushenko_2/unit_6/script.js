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

console.log('Hello-8');
//task 9 --------------------
//task 10 -------------------
//task 11 -------------------
//task 12 -------------------
//task 13 -------------------
//task 14 -------------------
//task 15 -------------------
//task 16 -------------------
//task 17 -------------------
//task 18 -------------------
//task 19 -------------------
//task 20 -------------------


