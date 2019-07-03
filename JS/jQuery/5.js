var elem1 = $('#pp1').html();
var elem2 = document.getElementById('pp2').innerHTML;
console.log(elem1);
console.log(elem2);

$('button').on('click', clickp);

function clickp() {
    var rand = Math.round(2 * (Math.random()));
    if (rand == 0) {
        console.log($('#p0').html());
    }
    else if (rand == 1) {
        console.log($('#p1').html());
    }
    else
        console.log($('#p2').html());
}
