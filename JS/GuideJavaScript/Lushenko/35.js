var min;

var sec;

var timer;

timer = setInterval(setclock,10);

function setclock(){
sec = incval(sec);
if (sec==0)
min = incval(min);
document.querySelector('#mySec').style.transform = 'rotate('+sec+'deg)';
document.querySelector('#myMin').style.transform = 'rotate('+min+'deg)';
}

function incval(val){
    if (val < 354)
val += 6;
else
val = 0;
console.log(val);
return val;
}