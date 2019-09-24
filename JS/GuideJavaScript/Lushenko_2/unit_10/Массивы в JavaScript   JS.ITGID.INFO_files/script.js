window.onresize = function(){
    changeLeftPanel;
}
window.addEventListener('orientationchange', changeLeftPanel, false);

changeLeftPanel();

function changeLeftPanel() {
    let width = document.body.clientWidth;
    console.log(width);
    if (width <= 768) {
        document.querySelector('.left-panel').classList.remove('position-fixed');
    }
    else {
        document.querySelector('.left-panel').classList.add('position-fixed');
    }
}

let nav = document.querySelector('.main-navigation');
document.querySelector('.burger-button').onclick = function(event) {
    event.preventDefault();
    showNav()
};
document.querySelector('.burger-button').ontouchstart = function(event) {
    event.preventDefault();
    showNav()
};

function showNav (event){
    if( nav.classList.contains('d-sm-none') ){
        nav.classList.remove('d-none', 'd-sm-none', 'd-xs-none');
        document.querySelector('.burger-button i').style.transform = 'rotate(90deg)';
        document.querySelector('.burger-button i').style.color = '#c83333';
    }
    else {
        nav.classList.add('d-none', 'd-sm-none', 'd-xs-none');
        document.querySelector('.burger-button i').style.transform = 'rotate(0deg)';
        document.querySelector('.burger-button i').style.color = '#fff';
    }
}