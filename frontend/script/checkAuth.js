    $.ajax({
        url: "http://localhost:3000/api/user/checkAuth",
        type: "GET",
        success: function(response) {
            console.log("ok")
        },
        error: function() {
            console.log("wtf")
            window.location.replace("/");
        }
    });