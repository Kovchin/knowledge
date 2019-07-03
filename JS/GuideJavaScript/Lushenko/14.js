var p = document.getElementsByTagName('p');
console.log(p);

for (var i=0 ; p.length; i++){
    p[i].onclick = f1;
}

function f1(){
    this.style.background = "pink";
}