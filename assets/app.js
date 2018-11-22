$(function() {
    $("#new_message")
    $('#tweets').on('click','#delete-tweet', function(){
        $(this).parent().remove();
    });
});
