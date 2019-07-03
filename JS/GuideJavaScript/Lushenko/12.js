//Назначаем обработчики событий на кнопки прокрутки слайдера
document.getElementById('Next').onclick = SliderRight;
document.getElementById('Prev').onclick = SliderLeft;
//Получаем коллекцию картинок страницы
var testimg = document.getElementsByTagName('img');
//Задаем глобальную переменную текущей позиции слайдера
var i = 0;
//Запускаем таймер по времени
sidetotimer();

function sidetotimer(){
	setTimeout(SliderRight, 5000);
}
//функция прорисовки слайдера в зафисимости от глобальной переменной i
function slidepolosa(){
	for (var j = 0; j < 7; j++) {
		if (i > j)
			testimg[j].style.order = 0;
		else
			testimg[j].style.order = -1;
	}
}
//Прокрутка слайдера вправо
function SliderRight() {
	i++;
	if (i > 7) i = 1;
	slidepolosa();
	sidetotimer();
}
//Прокрутка слайдера влево
function SliderLeft() {
	i--;
	if (i < 0) i = 6;	
	slidepolosa();
}