var block = document.getElementById('test');
var w = 0;

block.onclick = function (){
    this.style.background = 'green';
}

block.ondblclick = function(){
    this.style.background = 'red';
}

block.oncontextmenu = function(){
    this.style.background = 'blue';
    return false;
}

block.onmouseenter = function(){
    this.style.background = 'pink';
}

block.onmouseleave = function(){
    this.style.background = 'gold';
    this.style.width = '100px';
    w=0;
}

block.onmousemove = function(){
    w++;
    this.style.width = 100 + w + 'px';
}

block.onmousedown = function (event){
    this.style.background = 'cyan';
    console.log(event.button);
}

block.onmouseup = function() {
    this.style.background = 'white';
}