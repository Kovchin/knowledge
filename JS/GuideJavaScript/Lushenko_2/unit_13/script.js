// task 1 --------------------
//Выведите массив a1 на страницу.

let a1 = {
	3: 'hello',
	'one': 'hi'
},
	out1 = document.querySelector('#task-13-1 .out');

function showObject(div, obj) {
	for (let key in obj) {
		div.innerHTML += `${key} : ${obj[key]} <br>`;
	}
}

showObject(out1, a1);

// task 2 --------------------
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.

let a2 = {
	3: 'hello',
	'one': 'hi',
	'testt': 'vodoley',
	'ivan': 'ivanov'
},
	out2 = document.querySelector('#task-13-2 .out');

for (let key in a2) {
	if (a2[key].length > 2) {
		out2.innerHTML += `${key} : ${a2[key]} <br>`;
	}
}

// task 3 --------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

a3 = {
	3: 'hello',
	'one': 'hi',
	'testt': 'vodoley',
	'ivan': 'ivanov'
},
	out3 = document.querySelector('#task-13-3 .out');

for (let key in a3) {
	if (key.length > 2) {
		out3.innerHTML += `${key} <br>`;
	}
}

// task 4 --------------------
// Выведите на страницу элементы из масиива a4 у которых значение - число.

let a4 = {
	3: 'hello',
	'one': 4,
	'testt': 'vodoley',
	'ivan': 6
},
	out4 = document.querySelector('#task-13-4 .out');

for (let key in a4) {
	if (typeof (a4[key]) == 'number') {
		out4.innerHTML += `${a4[key]} <br>`;
	}
}

// task 5 --------------------
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

let a5 = {
	a: 7,
	z: 4,
	45: 12,
	f: 6
},
	out5 = document.querySelector('#task-13-5 .out'),
	sum5 = 0;



for (let key in a5) {
	sum5 += a5[key];
}

out5.innerHTML = `Сумма элементов ассоциативного массива a5 = ${sum5}`;

// task 6 --------------------
//Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

let a6 = {
	'name': 'Pavel',
	'age': 39,
	'sex': 'male',
	'height': 1.8,
},
	out6 = document.querySelector('#task-13-6 .out');

for (let key in a6) {
	out6.innerHTML += `${key} : ${a6[key]} <br>`;
}

// task 7 --------------------
//Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

let u7Key = document.querySelector('#task-13-7 .u7-key__input'),
	u7Value = document.querySelector('#task-13-7 .u7-value__input'),
	u7_form = document.querySelector('#task-13-7 .u7__form'),
	out7 = document.querySelector('#task-13-7 .out'),
	btn7_delete_key = document.querySelector('#task-13-7 .u8-delete-key__button'),
	btn7_delete_value = document.querySelector('#task-13-7 .u9-delete-value__button'),
	btn7_find_key = document.querySelector('#task-13-7 .u10-fund-key__button'),

	arr7 = {};

function showArr(arr, out) {
	out.innerHTML = '';
	for (let key in arr) {
		out.innerHTML += `${key} -- ${arr[key]} <br>`;
	}
}

u7_form.onsubmit = (event) => {
	let key = u7Key.value.trim(),
		value = u7Value.value.trim();

	event.preventDefault();

	arr7[key] = value;

	showArr(arr7, out7);

	return true;
}

// task 8 --------------------
//Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу. 

//Не понятно почему onclick на button отрабатывает как submit формы

btn7_delete_key.onclick = (event) => {
	event.preventDefault();

	if (u7Key.value.trim() === '' || arr7[u7Key.value.trim()] == undefined) {
		console.log('Ошибка');

		return false;
	}
	else {
		out7.innerHTML = '';

		delete arr7[u7Key.value.trim()];

		showArr(arr7, out7);

		return true;
	}
}

// task 9 --------------------
//Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу. 

btn7_delete_value.onclick = (event) => {
	event.preventDefault();
	res = 0;
	if (u7Value.value.trim() == '') {
		console.log('Ошибка');
		return false;
	}
	else {
		for (let key in arr7) {
			if (arr7[key] == u7Value.value.trim()) {
				res++;
				delete arr7[key];
			}
		}
	}
	if (res > 0) {
		showArr(arr7, out7);
		return res;
	}
	else
		return false;
}

// task 10 -------------------
//Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет. 

btn7_find_key.onclick = () => {
	let res = false;
	if (u7Key.value === '') {
		console.log(res);
		return res;
	}
	else
		for (let key in arr7) {
			if (key == u7Key.value.trim()) {
				res = true;
				console.log(res);
				return res;
			}
		}
	console.log(res);
	return res;
}

// task 11 -------------------
//Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу. 
a11 = {
	"red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', ' Левобережная', 'ТЧ-1 «Дарница»', 'Дарница', 'Черниговская', 'Лесная'],
	"blue": ['ТЧ-2 «Оболонь»', 'Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
	"green": ['ТЧ «Виноградарь»', 'Маршала Гречко', 'Виноградарь', 'Проспект Правды', 'Мостицкая', 'Сырец', 'Дорогожичи', 'Герцена', 'Лукьяновская', 'Львовская брама', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Теличка', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'ТЧ-3 «Харьковское»', 'Красный хутор', 'Промышленная', 'Улица Горбунова', 'Дарницкий вокзал', 'Ленинградская площадь', 'Броварской проспект'],
	"orange": ['ТЧ «Воскресенское»', 'Братиславская', 'Бульвар Перова', 'Радужная', 'Залив Десёнка', 'Труханов остров', 'Судостроительная', 'Подольская', 'Глубочицкая', 'Площадь Победы', 'Вокзальная ', 'Соломенская площадь', 'Чоколовская', 'Аэропорт', 'Кольцевая дорога', 'ТЧ «Гатное»'],
	"light blue": ['ТЧ «Троещина»', 'Улица Милославская', 'Улица Цветаевой', 'Улица Сабурова', 'Улица Драйзера', 'Улица Каштановая', 'Проспект Ватутина', 'Огородная', 'Днепровская Киев-Днепровский', 'Броварской проспект', 'Проспект Воссоединения', 'Березняки', 'ТЧ «Позняки»', 'Улица Здолбуновская', 'Улица Анны Ахматовой', 'Проспект Бажана', 'Улица Коллекторная', 'Осокорки-Центральные', 'Осокорки-Южные'],
};

out11 = document.querySelector('#task-13-11 .out');

function showArrMetro(arr, out) {
	out.innerHTML = '';
	for (let key in arr) {
		out.innerHTML += `<br> --- ${key} --- <br><br>`;
		for (let i = 0; i < arr[key].length; i++)
			out.innerHTML += `${arr[key][i].trim()} <br>`;
	}
};

showArrMetro(a11, out11);

// task 12 -------------------
//Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки. 

let metro_line = document.querySelector('#task-13-12 select'),
	out12 = document.querySelector('#task-13-12 .out'),
	btn12 = document.querySelector('#task-13-12 button');

let str = '';

for (let key in a11) {
	str += `<option>${key}</option>`;
}

metro_line.innerHTML = str;

btn12.onclick = () => {
	out12.innerHTML = '';

	for (let i = 0; i < a11[metro_line.value].length; i++)
		out12.innerHTML += `${a11[metro_line.value][i].trim()}<br>`;
}

// task 13 -------------------
//Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!! 

//Интересно было полностью динамически вывести этот блок на страницу
//На мой взгляд вышло не очень красиво, но функционал вдохновляет, если сильно заморочиться можно создать полностью динамическую структуру.
//В смысле простейшие игры в духе тетриса, змейки, нард, шахмат и т.д.
//Вообще задания пошли как то тяжелее. Интереснее, но в моем случае гораздо дольше.

let task13 = document.querySelector('#task-13-13'),
	select13 = document.createElement('select'),
	out13 = document.createElement('div'),
	label13 = document.querySelector('label'),
	check_box13 = document.createElement('input'),
	str13 = '';

check_box13.id = 'cbx13';
check_box13.type = "checkBox";

label13.for = 'cbx13';
label13.innerText = 'Инвертировать';

task13.appendChild(label13);
task13.appendChild(check_box13);

str = 0;
for (let key in a11) {
	str13 += `<option>${key}</option>`;
}


select13.innerHTML = str13;

task13.appendChild(select13);

task13.appendChild(out13);


function show13() {

	out13.innerHTML = '';
	if (check_box13.checked) {
		for (let i = a11[select13.value].length - 1; i >= 0; i--)
			out13.innerHTML += `${a11[select13.value][i].trim()} <br>`;
	}
	else
		for (let i = 0; i < a11[select13.value].length; i++) {
			out13.innerHTML += `${a11[select13.value][i].trim()} <br>`;
		}
}

select13.oninput = show13;

check_box13.oninput = show13;

// task 14 -------------------
//Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится. 

//Да без динамики гораздо читабельнее и опрятнее получается код

let select14 = document.querySelector('#task-13-14 select'),
	btn14 = document.querySelector('#task-13-14 button'),
	out14 = document.querySelector('#task-13-14 .out');

for (let key in a11) {
	for (let i = 0; i < a11[key].length; i++)
		select14.innerHTML += `<option>${a11[key][i].trim()}</option>`;
}

btn14.onclick = () => {
	let station = select14.value.trim();

	for (let key in a11) {
		if (a11[key].indexOf(station) > -1)
			out14.innerHTML = `Искомая Вами станция на ${key} ветке`;
	}
}
// task 15 -------------------
//Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0). 

/*
Задания пошли уже довольно объемные по части кода. 
Что бы проще было разбираться с моими умозаключениями я перед началом блоков с используемыми функциями буду оставлять комментарии что они делают, а в начале урока описывать логику вызова этих функций
	
	В этом уроке при нажатии кнопки отрабатывает функция 
======
findDelta(select1, select2)
======
	В качестве входных параметров у нее ссылка на 2 элемента select
	Результатом возвращается листинг текста:

		Если станции на разных ветках = "Выбранные Вами станции находятся на разных ветках"
		Если выбраны одинаковые станции = "Вы выбрали одну и ту же станцию"
		Если это соседние станции = "Вы выбрали соседние станции"
		Если станции на одной ветке и между ними больше 1 остановки = "Между выбранными Вами станциями ${res} остановки"
======
getRoad(nameStation)
======
	В качестве входных параметров принимает название станции
	Результатом выдает название ветки
======
createStationSelectList(select)
======
	В качестве входных параметров принимает ссылку на select
	Ничего не выводит, но результатом своих действий набивает в option через innerHTML список всех станций 

?======?
	(Не уверен что это верное решение думал как лучше, так или через создание новых объектов.
	Так как последний метод длиннее по реализации решил не перегружать Вас лишним текстом и 
	реализовал наиболее коротким в части листинга способом)
?======?

:-)======:-)
Забавно, но описание работы заняло почти столько же места как и сам код. Вообще не понятно нужно ли этим заниматься.
:-)======:-)
*/

let btn15 = document.querySelector('#task-13-15 button'),
	select1 = document.querySelector('#select-15-1'),
	select2 = document.querySelector('#select-15-2'),
	out15 = document.querySelector('#task-13-15 .out');

createStationSelectList(select1);
createStationSelectList(select2);

function getRoad(nameStation) {
	let res = false;
	for (let key in a11) {
		for (let i = 0; i < a11[key].length; i++) {
			if (a11[key][i] == nameStation) {
				res = key;
				return res;
			}
		}
	}
}

function createStationSelectList(select) {
	let res = '';

	for (let key in a11) {
		for (let i = 0; i < a11[key].length; i++) {
			res += `<option>${a11[key][i]}</option>`;
		}
	}
	select.innerHTML = res;
}

function findDelta(station1, station2) {
	let res = false,
		road1 = getRoad(station1.value),
		road2 = getRoad(station2.value);

	if (road1 == road2) {
		let station1_Num = a11[road1].indexOf(station1.value),
			station2_Num = a11[road2].indexOf(station2.value),
			delta = 0;

		if (station1_Num == station2_Num) {
			res = `Вы выбрали одну и ту же станцию`;
			return res;
		}
		else if ((station1_Num + 1 == station2_Num) || (station1_Num == station2_Num + 1)) {
			res = `Вы выбрали соседние станции`;
			return res;
		}
		else if (station1_Num > station2_Num) {
			res = station1_Num - station2_Num - 1;
		}
		else {
			res = station2_Num - station1_Num - 1;
		}

		return `Между выбранными Вами станциями ${res} остановки`;
	}
	res = `Выбранные Вами станции находятся на разных ветках`;
	return res;
}

btn15.onclick = () => {
	console.log(findDelta(select1, select2));
}
// task 16 -------------------
//Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки. 

/*
!======!
План
!======!
	Заполняем radio динамически из ключей массива a11
	навешать на все radio обработчик onchange
	radio.onchange ничего не выводит но запускает "setSelect(select)"
	setSelect(select) - Запускается в "radio.onchange" и наполняет select именами станций выбранной ветки
*/

let radio = document.querySelector('#task-13-16 .radio'),
	out = document.querySelector('#task-13-16 .out');
radio.innerHTML = '';

for (let key in a11) {
	radio.innerHTML += `<input type=radio name='road' id='${key}' value='${key}'> <label for='${key}'>${key}</label>`;
}

let arrRadio = document.querySelectorAll('#task-13-16 input');

for (let i = 0; i < arrRadio.length; i++) {
	arrRadio[i].onchange = function () {
		setSelect(this.value);
	}
}

function setSelect(road) {
	out.innerHTML = '';

	for (let i = 0; i < a11[road].length; i++) {
		out.innerHTML += `${a11[road][i]}<br>`;
	}
}

// task 17 -------------------
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
let a17 = {
	"red": [['Академгородок', 0], ['Театральная', 1], ['Крещатик', 1], ['Лесная', 0]],
	"green": [['ТЧ-2 «Оболонь»', 0], ['Тараса Шевченко', 1], ['Майдан Незалежности', 1], ['Площадь Льва Толстого', 1], ['ТЧ «Теремки»', 0]],
	"blue": [['ТЧ «Виноградарь»', 0], ['Лукьяновская', 1], ['Золотые ворота', 1], ['Дворец спорта', 1], ['Позняки', 1], [' 	Броварской проспект', 0]]
}

// task 18 -------------------
//Выведите на страницу только станции с переходами из массива a17.
let out18 = document.querySelector('#task-13-18 .out');

for (let key in a17) {
	out18.innerHTML += `Переходы для ${key} ветки: <br>`;
	for (let i = 0; i < a17[key].length; i++) {
		if (a17[key][i][1] === 1)
			out18.innerHTML += ` - ${a17[key][i][0]} <br>`;
	}
}

// task 19 -------------------
//Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу. 
let a19 = {
	'Армения': {
		'столица': 'Ереван',
		'население': 2986100,
		'площадь': 29743,
	},
	'Бангладеш': {
		'столица': 'Дакка',
		'население': 168957745,
		'площадь': 144000,
	},
	'Египет': {
		'столица': 'Каир',
		'население': 97041072,
		'площадь': 1001450,
	},
	'Израиль': {
		'столица': 'Иерусалим',
		'население': 8972000,
		'площадь': 20770,
	},
	'Ирак': {
		'столица': 'Богдад',
		'население': 37056169,
		'площадь': 435052,
	},
	'Иран': {
		'столица': 'Тегеран',
		'население': 81000000,
		'площадь': 1648195,
	},
},
	out19 = document.querySelector('#task-13-19 .out');

for (let key in a19) {
	out19.innerHTML += `${key}: <br>`;
	for (let key1 in a19[key])
		out19.innerHTML += ` - ${key1} : ${a19[key][key1]} <br>`;
}

// task 20 -------------------
// Дополните массив из задачи 20 так, чтобы пользователь мог сам выбирать страцу в select, а необходимая информация подтягивалась на страницу. 
let select20 = document.querySelector('#task-13-20 select'),
	out20 = document.querySelector('#task-13-20 .out');

for (let key in a19) {
	select20.innerHTML += `<option>${key}</option>`;
}

select20.onchange = () => {
	out20.innerHTML = `Название страны - ${select20.value} <br>`;
	for (let key in a19[select20.value])
		out20.innerHTML += ` - ${key} : ${a19[select20.value][key]}<br>`;
}