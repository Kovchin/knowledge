document.getElementById('MyCheck').onclick = checkInput;

function checkInput() {
	var test = document.getElementById('MyInput').value;
	if (test.match(/^[a-z0-9]{3,32}/i))
	document.getElementById('MyInput').style.borderColor = 'green';
		else
		document.getElementById('MyInput').style.borderColor = 'red';
}

