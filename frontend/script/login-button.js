$(document).ready(function() {
    $('.btn-success').click(function() {
        const data = {
            username: document.getElementById("username").value,
            password: document.getElementById("pass").value
        }
        $.ajax({
            url: "http://localhost:3000/api/users/login",
            type: "POST",
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(response) {
                window.location.replace("/index_when_login");
            },
            error: function() {
                showMessage("Wrong username or password");
            }
        });
    }); // missing end of statement.


    $(".icon-click").click(function() {
        $("#icon").toggleClass("fa-eye-slash");

        var input = $("#pass");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }

    });
});

function showMessage(message) {
    const modalFooter = document.querySelector("#login-foot");
    console.log(modalFooter)
    var d = document.createElement("div");
    d.className = "alert alert-warning alert-dismissible fade show";
    d.setAttribute("role", "alert");

    // var stng = document.createElement("strong");
    // stng.textContent = "Holy guacamole!";
    // console.log('message HERE ', message)
    var txt = document.createTextNode(message);

    var btn = document.createElement("button");
    btn.className = "close"
    btn.setAttribute("type", "button");
    btn.setAttribute("data-dismiss", "alert");
    btn.setAttribute("aria-label", "Close");

    var spn = document.createElement("span");
    spn.setAttribute("aria-hidden", "true");
    spn.textContent = 'x'

    btn.appendChild(spn);
    // d.appendChild(stng);
    d.appendChild(txt);
    d.appendChild(btn);
    modalFooter.appendChild(d);
}