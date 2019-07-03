var a = $('#example a');

for(var i = 0 ; i<a.length; i++){
    a[i].addEventListener('click',removeEmpty);
}

function removeEmpty(){
    var target = this.className;
    $('img.'+target).remove();
    $('a.'+target).empty();
}