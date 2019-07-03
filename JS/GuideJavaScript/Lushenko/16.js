//Назначение обработчика на бегунок что будет отвечать за скругление углов
document.getElementById('r1').oninput = cssGenerator;

//Назначение обработчиков что будут отвечать за цвет блока

document.getElementById('RR').oninput = SetRed;
document.getElementById('RG').oninput = SetGreen;
document.getElementById('RB').oninput = SetBlue;

//Массив цвета блока

var MyColor = [2];
//Строка кода цвета блока
var RC;
//Функция скругления углов блока

function cssGenerator(){
    var div=document.getElementById('test');
	div.style.borderRadius = this.value + 'px';
	MyOut();
}

//Функции формирования цвета

function SetRed(){
	MyColor[0]= GenHex(document.getElementById('RR').value);
	WriteColor();
}

function SetGreen(){
	MyColor[1]= GenHex(document.getElementById('RG').value);
	WriteColor();
}

function SetBlue(){
	MyColor[2]= GenHex(document.getElementById('RB').value);
	WriteColor();
}

//Функция применения цвета

function WriteColor(){
	RC='#'
	for (var i=0; i<3; i++){
		if (MyColor[i] == undefined)
			RC += ''+0;
			else
			RC += ''+MyColor[i];
	}
	var div=document.getElementById('test');
	div.style.background = RC;
	MyOut();
}

//Функция генерации шестнадцатеричного числа в зависимости от положения бегунка

function GenHex(chislo){
	return Math.floor(chislo).toString(16);
}

function MyOut(){
	document.getElementById('Out').innerHTML = '-webkit-border-radius: ' + document.getElementById('r1').value + 'px; \n';
	document.getElementById('Out').innerHTML = 'border-radius: ' + document.getElementById('r1').value + 'px; \n';
	document.getElementById('Out').innerHTML += 'background: ' + RC + ';';
}