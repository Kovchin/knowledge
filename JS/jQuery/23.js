$("#show").hide();

$('#hide').on('click', hideComments);
$('#show').on('click', showComments);

function showComments(){
    $('#lesson p').show(1000, function(){
        $('#hide').show();
        $('#show').hide();
    });

}

function hideComments(){
    $('#lesson p').hide(1000, function(){
        $('#hide').hide();
        $('#show').show();
    });
}

$('.close').on('click', myClose);

function myClose(event){
    $($(event.target).parent()).hide(1000, function(){
        $($(event.target).parent()).remove();
        alert('Блок удален');
    });
}