$('.close').on('click', myClose);

function myClose(event){
    $($(event.target).parent()).fadeOut(1000,function(){
        $($(event.target).parent()).remove();
        alert('Блок удален');
    });
}