var aside = nav = header = footer = a1 = a2 = null;

a1 = document.createElement('a');
a2 = document.createElement('a');

a1.innerHTML = 'Вернуться на главную';
a2.innerHTML = 'Обучение Java Script';

a1.href = '../../../index.html';
a2.href = '../../JavaScript.html';

aside = document.createElement('aside');
aside.appendChild(a1);
aside.appendChild(a2);
document.body.appendChild(aside);

nav = document.createElement('nav');
nav.innerHTML = 'nav';
document.body.appendChild(nav);

header = document.createElement('header');
header.innerHTML = 'header';
document.body.appendChild(header);

footer = document.createElement('footer');
footer.innerHTML = 'Все права защищены &copy; Ковчин П.В.';
document.body.appendChild(footer);

