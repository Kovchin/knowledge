document.querySelector('#out').innerHTML = navigator.userAgent;

var ss='';

if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPad') || navigator.userAgent.match('Android'))
ss = 'Mobile';
else
ss = 'Desktop';

document.querySelector('.out').innerHTML = ss;

console.log(navigator);