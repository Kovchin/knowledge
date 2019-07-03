var tempNum;
tempNum = Math.floor((Math.random()*10)+1);
console.log(tempNum);

function checkNum(){
    var IN;
    IN = document.getElementById('InputNumber').value;
    if (tempNum == IN){
        document.getElementById('Helper').innerHTML = "Поздравляю Вы угадали чмсло!!!";
    }
        else if (tempNum < IN){
            document.getElementById('Helper').innerHTML = "Загаданное число меньше введенного Вами";
        }
        else{
            document.getElementById('Helper').innerHTML = "Загаданное число больше введенного Вами";
        }
}