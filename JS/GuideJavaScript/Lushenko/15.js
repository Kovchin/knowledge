// Формируем массив MyRadio из элементов с именем test и выводим его в консоль

var MyRadio = document.getElementsByName('test');
console.log(MyRadio);

//прикручиваем обработчик событий на все элементы коллекции MyRadio

for(var i=0; i<MyRadio.length; i++){
    MyRadio[i].onchange = MyChecked;
}

//Прикручиваем обработчик onclick на кнопку

document.getElementById('MyTest').onclick = MyCheckChecked;

//Функция для вывода в консоль значения выбранного radioButton по изменению свойства onchange

function MyChecked(){
    console.log(this.value);
}

//Функция для вывода в Alert элемента с выбранным свойством checked

function MyCheckChecked(){
    for (var i=0; MyRadio.length; i++){
        if (MyRadio[i].checked){
        alert(MyRadio[i].value);
        break;
        }
    }
}