var m = {
	"00001": {
		"name": "Банан",
		"cost": 30,
		"img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-512.png",
		"sklad": "да"
	},
	"00002": {
		"name": "Помидор",
		"cost": 40,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/512/Tomato.png",
		"sklad": "нет"
	},
	"00003": {
		"name": "Клубника",
		"cost": 60,
		"img": "https://cdn4.iconfinder.com/data/icons/fruits-and-vegetables-21/64/Strawbery-512.png",
		"sklad": "да"
	}
};
var out = '';
for (var key in m) {
	out += 'Название товара: ' + m[key].name + '<br>';
	out += 'Цена: ' + m[key].cost + '<br>';
	out += 'Наличие на складе: ' + m[key].sklad + '<br>';
	out += '<img src="' + m[key].img + '"> <br> <hr>';

}

console.log(m);

document.getElementById('out').innerHTML = out;

