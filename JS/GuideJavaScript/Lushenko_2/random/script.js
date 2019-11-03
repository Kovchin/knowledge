function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let btn = document.querySelector('button'),
    out = document.querySelector('.out');

btn.onclick = () => {
    let min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;

    out.innerHTML = getRandomInRange(min, max);
}