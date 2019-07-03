window.onload = function(){
    document.getElementsByClassName('changedBlock')[0].style.background = localStorage.getItem('bgcolor');
}

document.getElementById('red').onclick = function(){
    document.getElementsByClassName('changedBlock')[0].style.background = 'red';
    localStorage.setItem('bgcolor', 'red');
}

document.getElementById('blue').onclick = function(){
    document.getElementsByClassName('changedBlock')[0].style.background = 'blue';
    localStorage.setItem('bgcolor', 'blue');
}

document.getElementById('orange').onclick = function(){
    document.getElementsByClassName('changedBlock')[0].style.background = 'orange';
    localStorage.setItem('bgcolor', 'orange');
}