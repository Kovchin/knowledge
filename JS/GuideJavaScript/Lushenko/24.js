/*
========================
инициализация переменных
========================
*/

var sdvig = 0; //-позиция блока

var sdvig3 = 0; //-позиция 3-го блока

var MaxTimer4 = 10;//задается максимальное значение таймера обратного отчета.

var test = document.getElementById('test');//-блок который будет перемещаться

var test2 = document.getElementById('test2');//-блок который будет перемещаться

var test3 = document.getElementById('test3');//-блок который будет перемещаться

var test4 = document.getElementById('test4');//-отображаемый таймер обратного отчета

test4.innerHTML = MaxTimer4;

var timer = setInterval(move,30);//-запускается бесконечный цикл перемещения блока и интервалом 30 мс. и для простоты использования присваивается все это имени test

var timer2 = setTimeout(move2, 2000);//-запускается таймер для однократного перемещения блока test2

var timer3 = setTimeout(move3, 30);//-запускается таймер для однократного перемещения блока test3

var timer4 = setInterval(move4, 1000);//-первый запуск таймера обратного отчета

document.getElementById('buttonStart').disabled = true;//дезактивируется кнопка Start

document.getElementById('buttonStart3').disabled = true;//дезактивируется кнопка Start

/*
=======================
Блок реализации функций
=======================
*/

document.getElementById('buttonStop').onclick = function(){
//функция по нажатию кнопки Stop останавливает перемещение блока и активирует кнопку Start  
  clearInterval(timer);
  document.getElementById('buttonStart').disabled = false;
};

document.getElementById('buttonStart').onclick = function(){
//Функция стартует движение блока по нажатию кнопки Start и делает себя неактивной
  timer = setInterval(move,30);
  document.getElementById('buttonStart').disabled = true;
}

document.getElementById('buttonStop3').onclick = function(){
  //функция по нажатию кнопки Stop останавливает перемещение блока и активирует кнопку Start  
    clearTimeout(timer3);
    document.getElementById('buttonStart3').disabled = false;
  };
  
  document.getElementById('buttonStart3').onclick = function(){
  //Функция стартует движение блока по нажатию кнопки Start и делает себя неактивной
    setTimeout(move3, 30);
    document.getElementById('buttonStart3').disabled = true;
  }

function move(){
//Функция движения блока
    test.style.marginLeft = sdvig + 'px'; 
    if (sdvig>=100)
    {sdvig = 0;}
    else
    {sdvig++;}
}

function move2(){
//Функция движения блока вызываемая с помощью команды setTimeout
  test2.style.marginLeft = 100 + 'px';
}

function move3(){
//Функция движения блока вызываемая с помощью команды setTimeout
  test3.style.marginLeft = sdvig3 + 'px';
  if (sdvig3 >= 100)
  sdvig3=0;
  else
  sdvig3++;
  timer3 = setTimeout(move3, 30);
}

function move4(){
  MaxTimer4 --;
  if (MaxTimer4 < 0){
   test4.innerHTML = 'Таймер остановлен!';
   clearInterval(timer4);
  }
   else
   test4.innerHTML = MaxTimer4;
}


