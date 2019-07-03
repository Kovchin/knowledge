$('img').on('click', increase);
$('img').on('mouseenter', opacity1);


function increase(event){
$($(event.target).parent()).css('text-align', 'center');

    $(event.target).animate(
        {
            opacity: 1,
            height: 500,
        },1000);

}

function opacity1(event){
    $(event.target).animate(
        {
            opacity: 1,
        },
    1000);
}
