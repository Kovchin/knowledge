function ChangeText(){
	document.getElementById('Out').innerHTML ="Новый текст";
}

function InsertText(){
	document.getElementById('Out').innerHTML += " Еще <b>порция</b> текста";
}

function InsertText2(){
	document.getElementById('Out').innerText += " Еще <b>порция</b> текста";
}

function createArrayCheckbox(){
	//Наполнение массива данными по выбранным RadioButton
	var arr1 = new Array();
	arr1[0] = document.getElementById('radio1').checked;
	arr1[1] = document.getElementById('radio2').checked;
	arr1[2] = document.getElementById('radio3').checked;
	arr1[3] = document.getElementById('radio4').checked;
	arr1[4] = document.getElementById('radio11').checked;
	arr1[5] = document.getElementById('radio12').checked;
	return arr1;
}

function checkChecked(){
	//создание строки для генерации команды относительно выбранных radio1 и TMemo
	var z, i, ArrResult, a, b, c;
	z = createArrayCheckbox();
	c=document.getElementById('TMemo').value;
	for(i=0; i<z.length;i++)
		if (z[i]==true)
		switch (i){
			case 0: {a='beforeBegin'}; break;
			case 1: {a='afterBegin'}; break;
			case 2: {a='beforeEnd'}; break;
			case 3: {a='afterEnd'}; break;
			case 4: {document.getElementById('Out').insertAdjacentHTML(a,c);}; break;
			case 5: {document.getElementById('Out').insertAdjacentText(a,c);}; break;
		}
}

function changeTag(){
	var a;
	a=document.getElementById('Out').innerHTML;
	document.getElementById('Out').outerHTML = document.getElementById('TMemo').value;
}