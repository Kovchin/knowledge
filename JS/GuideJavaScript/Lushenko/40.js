var aside = document.createElement('aside');
var a1 = document.createElement('a');
var a2 = document.createElement('a');
a1.href = '../../../index.html';
a2.href = '../../JavaScript.html';
a1.innerHTML = 'Вернуться на главную';
a2.innerHTML = 'Обучение Java Script';
aside.appendChild(a1);
aside.appendChild(a2);
document.body.appendChild(aside);

var footer = document.createElement('footer');
footer.innerHTML = 'Все права защищены &copy; Ковчин П.В';
document.body.appendChild(footer);

var nav = document.createElement('nav');
nav.innerHTML = 'nav';
document.body.appendChild(nav);

var header = document.createElement('header');
var p1 = document.createElement('p');
p1.id = 'HHH';
header.appendChild(p1);
p1.innerHTML = 'header';
document.body.appendChild(header);

function checkTime() {
    p1.innerHTML = Math.random();
}

setInterval(checkTime, 1000);

var NEW = OLD = ParentNode = null;

OLD = document.querySelector('h1');
NEW = document.createElement('div');
NEW.innerHTML = '<h2> Hello world! </h2>';
ParentNode = OLD.parentNode;
ParentNode.insertBefore(NEW, OLD.nextSibling);