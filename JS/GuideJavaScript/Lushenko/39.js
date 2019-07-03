window.onload = function () {
    var sdvig = 0;
    var speed = 3;
    var lh = 500;
    var layers = document.querySelectorAll('.page');

    console.log(layers);

    document.querySelector('.jlehmann').onwheel = function (event) {
        sdvig += speed * event.deltaY;
        if (sdvig > 0 && sdvig < lh) {
            document.querySelector('.red').style.top = sdvig + 'px';
            console.log('hello1');
        }
        else if (sdvig > lh && sdvig < (lh * 2)) {
            document.querySelector('.green').style.top = (sdvig - lh) + 'px';
        }
        else if (sdvig > lh * 2 && sdvig < 3 * lh) {
            document.querySelector('.blue').style.top = (sdvig - (2 * lh)) + 'px';
        }

        else if (sdvig < 0) {
            sdvig = 0;
            document.querySelector('.red').style.top = 0 + 'px';
        }

        else if (sdvig > (3 * lh)) {
            sdvig = 3 * lh
            document.querySelector('.blue').style.top = lh + 'px';
        }
        console.log('sdvig = ' + sdvig);

        return false;
    }
}

document.getElementById('b1').onclick = function () {
    document.querySelector('.red').style.top = 200 + 'px';
}

document.getElementById('b2').onclick = function () {
    document.querySelector('.green').style.top = 150 + 'px';
}

document.getElementById('b3').onclick = function () {
    document.querySelector('.blue').style.top = 100 + 'px';
}