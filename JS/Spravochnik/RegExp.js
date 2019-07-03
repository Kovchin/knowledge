var HeadTabs = $(".HeadTabs p");
var bodyTabs = $(".tabs");

HeadTabs[0].classList.add('active');
bodyTabs[0].setAttribute('style', 'display: block');


for (var i = 0; i < HeadTabs.length; i++) {
    HeadTabs[i].addEventListener('click', setActive);
    HeadTabs[i].setAttribute('data-id', i);
}

function setActive(event) {
    for (var i = 0; i < HeadTabs.length; i++) {
        HeadTabs[i].classList.remove('active');
        bodyTabs[i].removeAttribute('style');
    }
    event.target.classList.add('active');
    bodyTabs[parseInt(event.target.getAttribute('data-id'))].setAttribute('style', 'display: block');
}