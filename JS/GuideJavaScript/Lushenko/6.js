var randValue, TempNum;

//Генерация случайного значения при загрузке страницы.
randValue = Math.floor(Math.random()*10+1);
//Вывод его в консоль.
console.log(randValue);
//Вывод случайно загаданного значения. Закомментировать нижние 2 строки после отладки приложения.
//TempNum = document.getElementById('temp');
//TempNum.innerHTML = randValue;

function checkNumber(){
//Функция проверяющая введенное значение и сгенерированное компьютером, по результатам выводится подсказка.
    var InputNumber;
    InputNumber = Number(document.getElementById('IN').value);
    if (randValue == InputNumber)
            {document.getElementById('OutP').innerHTML = "Поздравляю Вы угадали число!!!";}
        else if(randValue > InputNumber)
            {document.getElementById('OutP').innerHTML = "Загаданное число больше введенного Вами";}
        else
            {document.getElementById('OutP').innerHTML = "Загаданное число меньше введенного Вами";}
}



