ChangeWidth = function(){
//функция циклически меняет ширину изображения 100px/500px
	var elem = document.getElementById("IdImg");
	var CurentWidth = Number(elem.width);
	if (CurentWidth==100)
	elem.width = 500;
	else
	elem.width = 100;
}

SetBig = function(){
//функция делает изображение шириной 500px;
	var elem = document.getElementById("IdImg");
	elem.width = 500;
}

SetSmall = function(){
//функция делает изображение шириной 100px;
	var elem = document.getElementById("IdImg");
	elem.width = 100;	
}

SetAttribute = function(){
//Накручиваем обработчики событий к изображению
	var elem = document.getElementById("IdImg");
	var myButton;
	elem.addEventListener("click",ChangeWidth);
	elem.addEventListener("mouseout",SetSmall);
	elem.addEventListener("mouseover",SetBig);
	console.log(elem.style);
//Делаем кнопку недоступной
	myButton = document.getElementById("IdBtn");
	myButton.disabled = 'disabled';
}

