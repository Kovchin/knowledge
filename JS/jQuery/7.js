//Получаем коллекцию всех картинок на странице
var collIMG = $('img');
//создаем массив для хранения всех ссылок на картинки
var mas = [];
//перекладываем все src картинок в массив
for (var i = 0; i < collIMG.length; i++) {
    mas[i] = collIMG[i].src;
}
//Выводим mas в alert в качестве склеивающего символа перевод каретки
alert(mas.join('\n'));