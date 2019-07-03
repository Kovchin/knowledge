var m = {};
for (var i=0; i<10; i++){
    var name = 'name' + i;
    m[name] = i;
}

var out = document.getElementById('out');
for (var key in m){
    out.innerHTML += key + '----' + m[key]+ '<br>';
}