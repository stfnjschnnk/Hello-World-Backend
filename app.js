var main = function() {

    $('.btn').click(function() {
        /*alert('button was clicked')*/
        var firstName = $('.status-box').val();


        $.getJSON("http://localhost:8080/HelloWorldBackend?firstName="+firstName, function(result){
            $('.results').html(result.firstName+" "+result.lastName+"<br><br>"+result.statement);
        });
    });
}

$(document).ready(main);