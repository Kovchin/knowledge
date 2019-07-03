document.onmousemove = function(){
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="../../../Images/cat.png" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';

    document.onmousemove = function (event){
        cat.style.left = event.clientX + 20 + 'px';
        cat.style.top = event.clientY + 20 + 'px';
    }
}

document.oncontextmenu = function(){
    return false;
}




