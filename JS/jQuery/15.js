$("#executeButton").on('click',execute);


function execute(){
    $('.example').html($('#textInput')[0].value);
}