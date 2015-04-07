var main = function() {
    $('.status-box').focus();
    $('.btn').click(askServerForUser);
    $(document).keypress(function(event) {
        if (event.which === 13) {
            askServerForUser();
            event.preventDefault();
            // TODO make event not execute 

        }
    });
}

$(document).ready(main);

function askServerForUser() {
    var firstName = $('.status-box').val();
    $.getJSON("http://localhost:8080/HelloWorldBackend?firstName="+firstName, function(result) {
        $('.results').html(result.firstName+" "+result.lastName+"<br><br>"+result.statement);
    });
    $('.status-box').val('');
}