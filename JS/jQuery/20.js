$('#example>button').on('click', output);

function output() {
    var sex = $('#example input[name="sex"]:checked').val();
    var textarea = $('#example input[type="text"]').val();
    var myDiv = $('<div></div>');
    $(myDiv).attr('id', 'result');
    console.log(myDiv);
    $('#example').append(myDiv);
    $("#result").append('Ваш пол: ' + sex + '<br>');
    $('#result').append('Комментарий: ' + textarea);
}