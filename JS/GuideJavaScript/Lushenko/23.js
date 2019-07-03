document.getElementById('foto').onmousemove = function (event){
var x = event.offsetX;
console.log(x);
document.getElementById('two').style.width = x +'px';
} 

document.getElementById('foto').onmouseleave = function(){
	document.getElementById('two').style.width = 375+'px';
}