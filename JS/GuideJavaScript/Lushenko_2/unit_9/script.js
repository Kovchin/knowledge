// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    let p1 = document.querySelector('.u-1');

    p1.style.width = '200px';
    p1.style.height = '100px';
}

func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let p2 = document.querySelector('.u-2');

    p2.classList.add('css-1');
}

func_2();


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let p3 = document.querySelectorAll('.u-3');

    for (let i = 0; i < p3.length; i++) {
        p3[i].onclick = function () {
            this.style.backgroundColor = 'red';
        }
    }
}

func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let p4 = document.querySelectorAll('.u-4');

    for (let i = 0; i < p4.length; i++) {
        p4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
}

func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let p5 = document.querySelectorAll('.u-5');

    for (let i = 0; i < p5.length; i++) {
        p5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

function func_6() {
    let btn6 = document.querySelector('.u-6');

    btn6.onclick = function () {
        this.classList.toggle('active');
    }
}

func_6();

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    console.log(document.querySelectorAll('.css-3').length);
}

func_7();
// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let arr_u1 = document.querySelectorAll('.u-1');

    for (let i = 0; i < arr_u1.length; i++) {
        arr_u1[i].title = 'test - data';
    }
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.
let arr_u9 = document.querySelectorAll('.u-9');

for (let i = 0; i < arr_u9.length; i++)
    arr_u9[i].onclick = func_9;

function func_9() {

    let d = this.getAttribute('data');

    console.log(`Данные получил, но как их достать не понятно. ${d}`);

    return d;
}


// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
let arr_u10 = document.querySelectorAll('.u-10__button');

for (let i = 0; i < arr_u10.length; i++) {
    arr_u10[i].onclick = func_10;
}

function func_10() {

    let out = document.querySelector('.u-10__out'),
        currency = this.getAttribute('data-currency');

    switch (currency) {
        case 'euro':
            out.innerHTML = 1.1;
            break;
        case 'usd':
            out.innerHTML = 1;
            break;
        case 'rub':
            out.innerHTML = 0.016;
            break;
        default:
            out.innerHTML = 'Что то пошло не по плану';
            break;
    }
}


// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 
let out_11 = document.querySelector('.u-11__out'),
    arr_u11 = document.querySelectorAll('.u-11__button');

for (let i = 0; i < arr_u11.length; i++) {
    arr_u11[i].onclick = func_11
}

function func_11() {
    let currency = this.getAttribute('data-currency'),
        amount = +document.querySelector('.u-11_input').value.trim();

    if (isNaN(amount)) {
        console.log('Эх помнить бы как выводить не просто return false но еще и выдавать свойство ошибки');
        return false;
    }

    switch (currency) {
        case 'euro':
            out_11.innerHTML = `В обменнике на ваши ${amount} долларов вы получите ${0.91 * amount} евро`;
            break;
        case 'usd':
            out_11.innerHTML = `В обменнике на ваши ${amount} долларов вы получите ${amount} долларов`;
            break;
        case 'rub':
            out_11.innerHTML = `В обменнике на ваши ${amount} долларов вы получите ${64 * amount} рублей`;
            break;
        default:
            out_11.innerHTML = `Ошибка, выбрана несуществующая валюта`;
            break;
    }
}

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let div = document.createElement('div');

    div.classList.add('css-4');

    return div;
}

console.log(func_12());

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let span = document.createElement('span');

    span.classList.add('span-13');
    span.innerHTML = ` 13`;
    return span;
}

let p13 = document.querySelector('.u-13');

p13.appendChild(func_13());

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let span = document.createElement('span');
    let p14 = document.querySelector('.u-14');

    span.classList.add('span-14');
    span.innerHTML = `14 `;

    p14.prepend(span);
}

func_14();


// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let span = document.createElement('span'),
        p15 = document.querySelector('.u-15');

    span.classList.add('span-15');
    span.innerHTML = `15 `;

    p15.before(span);
}

func_15();


// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let btn = document.createElement('button'),
        div16 = document.querySelector('.u-16__out'),
        str = ` u - 16 `;

    btn.classList.add('.u-16');
    btn.innerHTML = 'Push';

    btn.onclick = () => {
        console.log(str);
        div16.innerHTML += str;
    }

    div16.appendChild(btn);
}

func_16();



// TASK 17. Создайте функцию, func - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let p = document.createElement('p'),
        out = document.querySelector('.u-17'),
        body = document.querySelector('body');

    p.innerHTML = 17;

    body.replaceChild(p, out);
}

func_17();

// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

let div_18 = document.querySelectorAll('.out-18');

for (let i = 0; i < div_18.length; i++) {
    div_18[i].onclick = func_18;
}

function func_18() {
    let temp = this;
    temp.remove();
    return temp;
}

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let li = document.createElement('li'),
        out = document.querySelector('.u-19');

    li.innerHTML = text;
    out.appendChild(li);
}

func_19('text');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

function func_20(text) {
    let li = document.createElement('li'),
        cb = document.createElement('input'),
        label = document.createElement('label'),
        out = document.querySelector('.u-20');

    cb.type = 'checkbox';
    cb.id = 'temp';
    cb.onclick = function () {
        li.classList.toggle('css-5');
    }

    label.innerHTML = text;
    label.htmlFor = 'temp';
    
    li.appendChild(cb);
    li.appendChild(label);

    out.appendChild(li);
}

func_20('hello');





