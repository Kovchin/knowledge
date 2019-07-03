$('#button').on('click', insertP);
var w, h, c, inp;

function insertP() {
    inp = $('.example input');
    w = inp[0].value;
    h = inp[1].value;
    c = inp[2].value;
    if (checkInputValues(w, h)) {
        var p = $('<p class="new"> Новый абзац! </p>')
        p.css('width', w + 'px');
        p.css('height', h + 'px');
        p.css('background-color', c);
        $(p.insertAfter('.example'));
    }
}

function checkInputValues(w, h) {
    if (w < 150) {
        alert('ширина блока должна быть больше 150');
        return false;
    }
    else if (h < 50) {
        alert('Высота блока должна быть больше 50');
        return false;
    }
    else if ($('.new').length > 4) {
        alert('Не более 5-ти блоков')
        return false;
    }

    else return true;
}

