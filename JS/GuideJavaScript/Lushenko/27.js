//Присваиваем перемещаемому блоку имя block
var block = document.getElementById('block');

//Координаты X и Y перемещаемого блока
var posX = 0;
var posY = 0;

//Садим на любое нажатие клавиши в документе обработчик move
document.getElementsByTagName('body')[0].onkeydown = move;

//Проверяет нажатую клавишу и присваивает координаты X и Y перемещаемому блоку 
function move(event){

    checkPressButtons();

    block.style.top = posY + 'px';
    block.style.left = posX + 'px';

    return false;
}

//Проверяет нажатую клавишу и если нажаты стрелки то соответственно меняет координаты блока
function checkPressButtons(){
    switch (event.key){
        case 'ArrowRight': 
        posX++;
        break;
        case 'ArrowLeft': 
        posX--;
        break;
        case 'ArrowUp': 
        posY--;
        break;
        case 'ArrowDown': 
        posY++;
        break;
    }
}