var i,j;
i=j=100;

while (i>=0){
	document.getElementById('out1').innerHTML += (' ' + i);
	i--;
}

do{
	document.getElementById('out2').innerHTML += (' ' + j);
	j--;
}
while(j>=0);