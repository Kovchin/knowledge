$('#example p').on('dblclick', insertText);

function insertText(event){
    $('#example textarea').html($('#example textarea').html() + '\n' + $(event.target).html());
}