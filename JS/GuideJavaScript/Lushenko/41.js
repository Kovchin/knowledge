//как получить все div в теге main

var allDiv1 = document.getElementsByTagName('main')[0].getElementsByTagName('div');

var allDiv2 = document.querySelectorAll('main div');

allDiv2[2].style.background = 'darkgreen';

var faultOut = document.getElementsByClassName('test');

var getP1 = document.getElementById('div4').querySelector('p');

var getAllP1 = document.querySelectorAll('main div p');

console.log(allDiv1);

console.log(allDiv2);

console.log(faultOut);

console.log(getP1);

console.log(getAllP1);

//Очень странный способ доступа к свойствам элемента по ID (div4)

div4.style.background = 'darkred';

//Запросим дочерние элементы первого div

var child1 = allDiv1[0].childNodes;
console.log(child1);

var child2 = allDiv1[0].children;
console.log(child2);
