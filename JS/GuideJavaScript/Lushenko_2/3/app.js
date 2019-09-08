//task1
//Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.
let a = 4;

if (a == 4)
    console.log('a = 4');
else
    console.log('a != 4');

//task2
//Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.
let b = 8;
let c = 10;

if (b > c)
    console.log('b = ' + b + ' больше');
else if (b < c)
    console.log('с = ' + c + ' больше');

//task3
//Используя else if добавьте в предыдущую задачу проверку на равенство.
b = 8;
c = 10;

function comparison_of_numbers(a, b) {
    if (a > b) {
        return (a + ' больше ');
    }
    else if (a < b) {
        return (b + ' больше ');
    }
    else {
        return 'Переменные равны';
    }
}

console.log(comparison_of_numbers(b, c));

//task4
//Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".
let button4 = document.querySelector('.task4 button');

button4.onclick = function () {
    let out4 = document.querySelector('.task4 .out');

    let value1 = +document.querySelector('.task4 .a').value;
    let value2 = +document.querySelector('.task4 .b').value;

    //функция из примера №4 отлично подходит для решения этой задачи
    out4.innerHTML = comparison_of_numbers(value1, value2);
}

//task5
//Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя. 
//Решение работает, но совершенно не нравится. Нутром чувствую что должен быть красивый способ, а не этот Франкенштейн с 4-мя итерациями времени в 2-ух форматах.
let button5 = document.querySelector('.task5 button');

button5.onclick = function () {
    let nowDate = new Date();
    let year2000 = new Date(2000);
    let birthdayDate = new Date(document.querySelector('.task5 input').value);
    let delta = new Date(nowDate.getTime() - birthdayDate.getTime());

    delta = delta.getFullYear() - 1970;

    if (birthdayDate.getFullYear() < year2000) {
        let out5 = document.querySelector('.task5 .out');
        out5.innerHTML = delta + ' лет.';
    } else
        console.log(delta + ' лет.');
}

//task6
//Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.
let button6 = document.querySelector('.task6 .execute button');

button6.onclick = function () {
    let out6 = document.querySelector('.task6 .out');

    let apartment = document.querySelector('.task6 input').value;

    if (apartment > 0 && apartment < 32)
        out6.innerText = 'такая квартира есть';
    else out6.innerText = 'квартира не существует';
}

//task7
//Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.
let button7 = document.querySelector('.task7 button');

button7.onclick = function () {
    let out7 = document.querySelector('.task7 .out');

    let number7 = +document.querySelector('.task7 input').value;

    if (number7 > 0)
        out7.innerText = 'Число больше 0';
    else if (number7 < 0)
        out7.innerText = 'Число меньше 0';
    else if (number7 == 0)
        out7.innerText = 'Число = 0';
    else
        out7.innerText = 'Что то пошло не по плану... :-)';
}

//task8
//Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число.
let button8 = document.querySelector('.task8 button');

button8.onclick = () => {
    let out8 = document.querySelector('.task8 .out');

    let input8 = +document.querySelector('.task8 .execute input').value;

    if (input8 % 2 == 0)
        out8.innerText = 'Вы ввели четное число';
    else
        out8.innerText = 'Вы ввели не четное число';
}

//task9
//Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем!
let button9 = document.querySelector('.task9 button');

button9.onclick = () => {
    let out9 = document.querySelector('.task9 .execute .out');

    let input9_1 = +document.querySelector('.task9 .x').value;
    let input9_2 = +document.querySelector('.task9 .y').value;

    if (input9_1 != '' && input9_2 != '')
        out9.innerText = input9_1 ** input9_2;
    else out9.innerText = 'Заполните оба поля';
}

//task10
//Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello... 
let button10 = document.querySelector('.task10 button');

button10.onclick = () => {
    let input10 = document.querySelector('.task10 input').value.trim();

    if (input10 != '')
        alert('Hello ' + input10);
    else
        alert('Не шали!!! :-)')
}

//task11
//Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input. 
//Я 10-ое упражнение решил так что его решение подходит и к 11-му. Потому copy/paste
let button11 = document.querySelector('.task11 button');

button11.onclick = () => {
    let input11 = document.querySelector('.task11 input').value.trim();

    if (input11 != '')
        alert('Hello ' + input11);
    else
        alert('Не шали!!! :-)')
}

//task12
//Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.

let button12 = document.querySelector('.task12 button');

button12.onclick = () => {
    let input12 = +document.querySelector('.task12 input').value.trim();

    switch (input12) {
        case 1: console.log('Один'); break;
        case 2: console.log('Два'); break;
        case 3: console.log('Три'); break;
        default: console.log('Вы ввели число не соответствующее запрашиваему диапазону');
    }
}

//task13
//Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.

let button13 = document.querySelector('.task13 button');

button13.onclick = () => {
    let out13 = document.querySelector('.task13 .out');

    let input13 = +document.querySelector('.task13 input').value.trim();

    if ((input13 >= 1) && (input13 < 6))
        out13.innerText = 'Улица имени 1';
    else if ((input13 >= 6) && (input13 < 11))
        out13.innerText = 'Улица имени 2';
    else if ((input13 >= 11) && (input13 <= 20))
        out13.innerText = 'Улица имени 3';
    else
        out13.innerText = 'Нет такой улицы в этом городе.';
}

//task14
//Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Вывод результатов сделайте на страницу.
let button14 = document.querySelector('.task14 .execute button');

button14.onclick = () => {
    let out14 = document.querySelector('.task14 .out');

    let input14 = +document.querySelector('.task14 .execute input').value.trim();

    if (input14 >= 0 && input14 <= 25)
        out14.innerText = 'не обнаруживается';
    else if (input14 > 25 && input14 <= 50)
        out14.innerText = 'снижение числа лимфоцитов';
    else if (input14 > 50 && input14 <= 100)
        out14.innerText = 'вялость, рвота';
    else if (input14 > 100 && input14 <= 150)
        out14.innerText = 'смертность 5 %';
    else if (input14 > 150 && input14 <= 350)
        out14.innerText = 'смертность 50 % за 30 суток';
    else if (input14 > 350 && input14 <= 600)
        out14.innerText = '90 % смертность за 2 недели';
    else if (input14 > 600 && input14 <= 1000)
        out14.innerText = '...';
    else out14.innerText = 'Введите корректное значение';
}

//task15
//Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.
let x = 1;
let y = 0;
let res = x && y;

console.log('Результат логического "И" x = 0 и y = 1 это ' + res);

res = x || y;

console.log('Результат логического "ИЛИ" x = 0 или y = 1 это ' + res);

//task16
//В Казахстане, налог на объем двигателя объемом 500 куб составляет 2525 тенге, 1200 куб - 5050 тенге, 1600 - 8275 тенге, 1900 куб - 9675 тенге, 2000 - 11075 тенге. Напишите программу, где пользователь может ввести в input объем двигателя до 2000 куб включительно и получить налог на данный двигатель.
let button16 = document.querySelector('.task16 .execute button');

button16.onclick = () => {
    let output = document.querySelector('.task16 .execute .out');

    let input = +document.querySelector('.task16 .execute input').value.trim();

    if (input > 0 && input < 500)
        output.innerText = 'Налог составит 2525 тенге.';
    else if (input > 500 && input <= 1200)
        output.innerText = 'Налог составит 5050 тенге.';
    else if (input > 1200 && input <= 1600)
        output.innerText = 'Налог составит 8275 тенге.';
    else if (input > 1600 && input <= 1900)
        output.innerText = 'Налог составит 9675 тенге.';
    else if (input > 1900 && input <= 2000)
        output.innerText = 'Налог составит 11075 тенге.';
    else
        output.innerText = 'Введите корректные данные';
}

//task17
//Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.
let button17 = document.querySelector('.task17 .execute button');

button17.onclick = () => {
    let output = document.querySelector('.task17 .execute .out');

    let valuta = +document.querySelector('.task17 .execute .input1').value.trim();
    let kurs = document.querySelector('.task17 .execute .input2').value.trim();

    if (kurs == 'euro' || kurs == 'rub' || kurs == 'uah') {
        if (!isFinite(valuta) || valuta < 0) {
            output.innerText = 'В поле Валюта нужно ввести положительное число';
        }
        else {
            if (kurs == 'euro')
                output.innerText = (0.9 * valuta).toFixed(2) + ' Евро';
            else if (kurs == 'rub')
                output.innerText = (65.79 * valuta).toFixed(2) + ' Рублей';
            else if (kurs == 'uah')
                output.innerText = (24.81 * valuta).toFixed(2) + ' Украинских гривен';
        }
    }
    else
        output.innerText = 'Введите корректное имя валюты';
}

//task18
//Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.
let button18 = document.querySelector('.task18 .execute button');

button18.onclick = () => {
    let output = document.querySelector('.task18 .execute .out');

    let valuta = +document.querySelector('.task18 .execute .input1').value.trim();
    let kurs = document.querySelector('.task18 .execute .input2').value.trim();

    if (kurs == 'euro' || kurs == 'rub' || kurs == 'uah') {
        if (!isFinite(valuta) || valuta < 0) {
            output.innerText = 'В поле Валюта нужно ввести положительное число';
        }
        else {
            switch (kurs) {
                case 'euro':
                    output.innerText = (0.9 * valuta).toFixed(2) + ' Евро';
                    break;
                case 'rub':
                    output.innerText = (65.79 * valuta).toFixed(2) + ' Рублей';
                    break;
                case 'uah':
                    output.innerText = (24.81 * valuta).toFixed(2) + ' Украинских гривен';
                    break;
            }
        }
    }
    else
        output.innerText = 'Введите корректное имя валюты';
}

//task19
//Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.
let button19 = document.querySelector('.task19 .execute button');

button19.onclick = () => {
    let out = document.querySelector('.task19 .execute .out');

    let x = +document.querySelector('.task19 .execute .input1').value.trim();
    let y = +document.querySelector('.task19 .execute .input2').value.trim();
    let znak = document.querySelector('.task19 .execute .znak').value.trim();

    if (znak == '+')
        out.innerText = x + y;
    else if (znak == '-')
        out.innerText = x - y;
    else if (znak == '*')
        out.innerText = x * y;
    else if (znak == ':')
        out.innerText = x / y;
    else out.innerText = 'Проверьте введенные данные';
}

//task20
//Проделайте предыдущую задачу с помощью switch case.
let button20 = document.querySelector('.task20 .execute button');

button20.onclick = () => {
    let out = document.querySelector('.task20 .execute .out');

    let x = +document.querySelector('.task20 .execute .input1').value.trim();
    let y = +document.querySelector('.task20 .execute .input2').value.trim();
    let znak = document.querySelector('.task20 .execute .znak').value.trim();

    switch (znak) {
        case '+':
            out.innerText = x + y;
            break;
        case '-':
            out.innerText = x - y;
            break;
        case '*':
            out.innerText = x * y;
            break;
        case ':':
            out.innerText = x / y;
            break;
        default:
            out.innerText = 'Проверьте введенные данные';
    }
}