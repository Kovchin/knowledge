$('#test').on('click', hide1);

$('span').on('click', show1);

function hide1() {
    $('#test').hide();
}

function show1() {
    $('#test').show();
}

$('#mybutton').on("click", check);

function check() {
    var IN = parseInt($('#mytext').val());
    switch (IN) {
        case 1: {
            alert($('#myp1').html());
            break;
        }
        case 2: {
            alert($('#myp2').html());
            break;
        }
        case 3: {
            alert($('#myp3').html());
            break;
        }
        default: {
            alert('Введите число от 1 до 3');
            break;
        }
    }
}
