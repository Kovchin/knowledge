
document.onkeypress = function(event){
	document.getElementById('IB').innerHTML = 'Вы нажали клавишу: ' + event.key;
	console.log(event);
}