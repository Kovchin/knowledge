GetValue = function(){
    var inp = [x1, x2];
    inp[0] = document.getElementById('x1').value;
    inp[1] = document.getElementById('x2').value;
    return inp;
}

Plus = function(){
    var inp = GetValue();
    var result = Number(inp[0]) + Number(inp[1]);
    document.getElementById('res').innerHTML = result;
}

Minus = function(){
    var inp = GetValue();
    var result = Number(inp[0]) - Number(inp[1]);
    document.getElementById('res').innerHTML = result;    
}

Multiply = function(){
    var inp = GetValue();
    var result = Number(inp[0]) * Number(inp[1]);
    document.getElementById('res').innerHTML = result;    
}

Divide = function(){
    var inp = GetValue();
    var result = Number(inp[0]) / Number(inp[1]);
    document.getElementById('res').innerHTML = result;    
}
