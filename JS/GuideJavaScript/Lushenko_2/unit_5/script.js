// task 1 --------------------
for (let i = 1; i <= 10; i++)
    console.log(i);

// task 2 --------------------
for (let i = 1; i <= 10; i++)
    document.querySelector('#task-2 .out').innerHTML += i + ' ';

//task 3 --------------------
for (let i = 10; i >= 0; i--)
    document.querySelector('#task-3 .out').innerHTML += i + ' ';

//task 4 --------------------
for (let i = 0; i <= 10; i = i + 2)
    document.querySelector('#task-4 .out').innerHTML += i + ' ';

//task 5 --------------------
for (let i = 21; i >= 0; i = i - 3)
    document.querySelector('#task-5 .out').innerHTML += i + ' ';

//task 6 --------------------
for (let i = 0; i < 6; i++)
    document.querySelector('#task-6 .out').innerHTML += '******<br>';

//task 7 --------------------
let btn_7 = document.querySelector('#task-7 .execute button');

btn_7.onclick = () => {
    let out_7 = document.querySelector('#task-7 .out');

    let inp_7 = parseInt(+document.querySelector('#num-7').value.trim());

    out_7.innerHTML = '';
    for (let i = inp_7; i >= 0; i--)
        out_7.innerHTML += i + ' ';
}

//task 8 --------------------
let btn_8 = document.querySelector('#task-8 .execute button');

btn_8.onclick = () => {
    let out_8 = document.querySelector('#task-8 .out');

    let inp_8_1 = parseInt(+document.querySelector('#inp-8-1').value.trim());
    let inp_8_2 = parseInt(+document.querySelector('#inp-8-2').value.trim());

    for (let i = inp_8_1; i <= inp_8_2; i++)
        out_8.innerHTML += i + ' ';
}

//task 9 -------------------
let btn_9 = document.querySelector('#task-9 .execute button');

btn_9.onclick = () => {
    let out_9 = document.querySelector('#task-9 .out');

    let inp_9_1 = parseInt(+document.querySelector('#inp-9-1').value.trim());
    let inp_9_2 = parseInt(+document.querySelector('#inp-9-2').value.trim());

    if (inp_9_1 < inp_9_2) {
        for (let i = inp_9_1; i <= inp_9_2; i++)
            out_9.innerHTML += i + ' ';
    }
    else
        alert('Проверьте введенные данные');
}

//task10 -------------------
let out_10 = document.querySelector('#task-10 .out');

for (let i = 1901; i <= 1950; i++) {
    if (i % 4 == 0)
        out_10.innerHTML += i + ' ';
}

//task11 -------------------
let out_11 = document.querySelector('#task-11 .out');

out_11.innerText = 'Количество div  с классом "one" на странице = ' + +document.querySelectorAll('.one').length;

//task12 -------------------
let btn_12 = document.querySelector('#task-12 button');

btn_12.onclick = () => {
    let one = document.querySelectorAll('.one');
    console.log(one);
    for (let i = 0; i < one.length; i++)
        one[i].style.backgroundColor = 'darkorange';
}

//task13 -------------------
let btn_13 = document.querySelector('#task-13 button');

btn_13.onclick = () => {
    let one = document.querySelectorAll('.one');
    let out_13 = document.querySelector('#task-13 .out');

    for (let i = 0; i < one.length; i++)
        console.log(one[i].innerHTML);;
}

//task14 -------------------
let btn_14 = document.querySelector('#task-14 button');

btn_14.onclick = () => {
    let inp_num = document.querySelectorAll('input[type="number"]');
    if (inp_num.length > 0) {
        for (let i = 0; i < inp_num.length; i++)
            inp_num[i].placeholder = 'Введите данные';
    }
}

//task15 -------------------
let btn_15 = document.querySelector('#task-15 button');

btn_15.onclick = () => {
    console.log('Количество input[type="number"] = ' + document.querySelectorAll('input[type="number"]').length);
}

//task16 -------------------
let btn_16 = document.querySelector('#task-16 button');

btn_16.onclick = () => {
    let inp_radio = document.querySelectorAll('#task-16 .execute input[type="radio"]');
    let out_16 = document.querySelector('#task-16 .execute .out');

    if (inp_radio.length > 0) {
        for (let i = 0; i < inp_radio.length; i++) {
            if (inp_radio[i].checked == true)
                out_16.innerText = inp_radio[i].value;
        }
    }
}

//task17 -------------------
let btn_17 = document.querySelector('#task-17 button');

btn_17.onclick = () => {
    document.querySelector('#task-16 .execute input[type="radio"]').checked = true;
}

//task18 -------------------
let btn_18 = document.querySelector('#task-18 button');

btn_18.onclick = () => {
    let inp_radio = document.querySelectorAll('#task-16 .execute input[type="radio"]');

    if (inp_radio.length > 0) {
        for (let i = 0; i < inp_radio.length; i++) {
            inp_radio[i].value = i;
        }
    }
}

//task19 -------------------
let btn_19 = document.querySelector('#task-19 button');

btn_19.onclick = () => {
    let inp_radio = document.querySelectorAll('#task-19 .execute input[type="radio"]');
    let out_19 = document.querySelector('#task-19 .execute .out');

    if (inp_radio.length > 0) {
        for (let i = 0; i < inp_radio.length; i++) {
            if (inp_radio[i].checked == true && inp_radio[i].value == 6)
                out_19.innerText = true;
            else
                out_19.innerText = false;
        }
    }
}
//task20 -------------------
let inp_radio20 = document.querySelectorAll('#task-20 .execute input[type="radio"]');

if (inp_radio20.length > 0) {
    for (let i = 0; i < inp_radio20.length; i++) {
        inp_radio20[i].onclick = showchange;
    }
}

function showchange() {
    console.log('был изменен input');
}