//Задание 1
var m = {
	"Name": "Pavel",
	"Age": 38,
	"Sex": "Man",
	"Id": "1d"
};

console.log(m);

//Задание 2

var m1 = {
	"Name": "Pavel",
	"Age": 38,
	"Sex": "Man",
	"Id": "1d",
	"Year": function () {
		return 2019 - this.Age;
	}
};

console.log(m1.Year());

//Задание 3

var SumRes = 0;
var m2 = {
	"mas": [5, 6, 34, 12, 45],
	"summ": function () {
		for (var i = 0; i < this.mas.length; i++)
			SumRes += this.mas[i];
		return SumRes;
	}
};

console.log(m2.summ());