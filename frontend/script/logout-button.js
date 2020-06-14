$(document).ready(function() {
    $('.btn-logout').click(function() {
        $.ajax({
            url: "http://localhost:3000/api/user/logout",
            type: "GET",
            success: function(response) {
                document.cookie = "token" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.replace("/");
            },
            error: function(response) {
                showMessage(response.responseJSON.message);
            }
        });
    }); // missing end of statement.
});