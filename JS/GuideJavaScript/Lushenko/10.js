var mas = [];
var i;
for (i=0; i<30; i++){
	mas[i] = Math.round(Math.random()*100+1);
}
WriteArray(mas);

function WriteArrayInConsole(arr){
	var i, s;
	s=''; 
	i=0;
	for (i;i<arr.length;i++)
		s += arr[i] + '; ';
	console.log(s);
}

function WriteArray(arr){
	var i, j, s;
	s='';
	i=0;
	j=0;
	document.getElementById('Out').innerHTML = '';
	for (i ; i<arr.length ; i++){
		if (j<10){
			document.getElementById('Out').innerHTML += arr[i] + ' ';
			j++;	
		}
		else{
			j=0;
			document.getElementById('Out').innerHTML += '<br>'
		}
	}
}

function PushArray(arr){
	arr.push(document.getElementById('InputText').value);
	WriteArray(arr);
}

function PopArray(arr){
	arr.pop();
	WriteArray(arr);
}

function ShiftArray(arr){
	arr.shift();
	WriteArray(arr);
}

function UnShift(arr){
	arr.unshift(document.getElementById('InputText').value);
	WriteArray(arr);
}
