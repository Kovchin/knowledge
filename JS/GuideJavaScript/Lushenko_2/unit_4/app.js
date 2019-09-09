//task1
//Создайте button - при нажатии на него выводите alert с номером задачи.

let btn_1 = document.querySelector('#task1 button');

btn_1.onclick = () => {
    alert('Задача №1');
}

//task2
//Создайте input type=button - при нажатии на него выводите alert с номером задачи.
//Без form не очень понятна разница между функционалом кнопок

let inp_2 = document.querySelector('.task2 input');

inp_2.onclick = () => {
    alert('Задача №2');
}

//task3
//Создайте p - при нажатии на него выводите alert с номером задачи.

let p3 = document.querySelector('.task3 .execute p');

p3.onclick = () => {
    alert('Задача №3');
}

//task4
//Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.

let btn_4 = document.querySelector('.task4 button');

btn_4.onclick = () => {
    document.querySelector('.task4 .execute .out').innerText = document.querySelector('.task4 input').checked;
}

//task5
//Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.

let btn_5 = document.querySelector('.task5 .execute button');

btn_5.onclick = () => {
    let cb_5 = document.querySelector('.task5 .execute input');
    let out_5 = document.querySelector('.task5 .execute .out');
    if (cb_5.checked)
        out_5.innerText = cb_5.value;
    else
        out_5.innerText = 'false';
}

//task6
//Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.

let btn_6 = document.querySelector('#task6 .execute button');

btn_6.onclick = () => {
    alert(document.querySelector('#task6 .execute input').value);
}

//task7
//Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.

let btn_7 = document.querySelector('#task7 .execute button');

btn_7.onclick = () => {
    let inp_7 = document.querySelector('#task7 .execute input').value;


    if (inp_7.length < 7)
        console.log('Длинна пароля ' + inp_7.length + ' символов что меньше запрашиваемого в условии задания');
    else
        alert(inp_7);
}

//task8
//Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.

let btn_8 = document.querySelector('#btn_8');

btn_8.onclick = () => {
    let div_8 = document.querySelector('#task8 .execute');


    div_8.innerHTML = '<input type="text" id="inp_8_2">';
    div_8.innerHTML += '<button id="btn_8_2">Push</button>';

    let btn_8_2 = document.querySelector('#btn_8_2');

    btn_8_2.onclick = () => {
        let inp_8_2 = document.querySelector('#inp_8_2');
        console.log(inp_8_2);
        alert(inp_8_2.value);
    }
}

//task9
//Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.

let btn_9 = document.querySelector('#task9 .execute button');

btn_9.onclick = () => {
    let rb_9 = document.querySelector('#rb_9');

    console.log(rb_9);

    if (rb_9.checked)
        alert(rb_9.value);
    else
        alert(false);
}

//task10
//Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом. 

let btn_10 = document.querySelector('#task10 .execute button');

btn_10.onclick = () => {
    let inp_10 = document.querySelector('#task10 .execute input'),
        out_10 = document.querySelector('#task10 .execute');

    out_10.style.backgroundColor = inp_10.value;
}

//task11
//Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.

let btn_11 = document.querySelector('#task11 .execute button');

btn_11.onclick = () => {
    document.querySelector('#inp_11_2').value = document.querySelector('#inp_11_1').value;
}

//task12
//Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату. 

let btn_12 = document.querySelector('#task12 .execute button');

btn_12.onclick = () => {
    let out_12 = document.querySelector('#task12 .execute .out');

    out_12.innerText = document.querySelector('#task12 .execute input').value;
}

//task13
//Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.

let btn_13 = document.querySelector('#task13 .execute button');
let inp_13 = document.querySelector('#task13 .execute input');

btn_13.onclick = () => {
    document.querySelector('#task13 .execute .out').innerHTML = 'Значение выведенное нажатии кнопки. <br> Input = ' + inp_13.value;
}

inp_13.oninput = () => {
    document.querySelector('#task13 .execute .out').innerHTML = 'Значение выведенное при изменении. <br> Input = ' + inp_13.value;
}

//task14
//Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
let btn_14 = document.querySelector('#task14 .execute button');

btn_14.onclick = () => {
    document.querySelector('#task14 .execute .out').innerText = document.querySelector('#task14 .execute textarea').value;
}

//task15
//Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
let btn_15 = document.querySelector('#task15 .execute button');

btn_15.onclick = () => {
    document.querySelector('#task15 .execute textarea').value = document.querySelector('#task15 .execute input').value;
}

//task16
//Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.
let btn_16 = document.querySelector('#task16 .execute button');

btn_16.onclick = () => {
    document.querySelector('#task16 .execute .out').innerText = document.querySelector('#sel_16').value;
}

//task17
//Создайте select и button - при нажатии на кнопку выводите на страницу текст выбраннов в select option.
let btn_17 = document.querySelector('#task17 .execute button');

btn_17.onclick = () => {
    sel_17 = document.querySelector('#sel_17');
    for (let i = 0; i < sel_17.children.length; i++) {
        if (sel_17.children[i].value == sel_17.value)
            document.querySelector('#task17 .execute .out').innerText = sel_17.children[i].label;
    }
}

//task18
//Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.
let sel_18 = document.querySelector('#sel_18');

sel_18.onchange = () => {
    sel_18 = document.querySelector('#sel_18');
    for (let i = 0; i < sel_18.children.length; i++) {
        if (sel_18.children[i].value == sel_18.value)
            document.querySelector('#task18 .execute .out').innerText = sel_18.children[i].label;
    }
}

//task19
//Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.
let btn_19 = document.querySelector('#task19 .execute button');

btn_19.onclick = (event) => {
    event.preventDefault();
    let inp_19_1 = document.querySelector('#inp_19_1');
    let inp_19_2 = document.querySelector('#inp_19_2');
    console.log('login = ' + inp_19_1.value);
    console.log('password = ' + inp_19_2.value);
}

//task20
//Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)
let btn_20 = document.querySelector('#task20 .execute button');

btn_20.onclick = (event) => {
    event.preventDefault();
    let form_20 = document.querySelector('#form_20');
    console.log('login = ' + form_20.elements[0].value);
    console.log('password = ' + form_20.elements[1].value);
}