$(document).ready(function() {
    $('.btn-secondary').click(function() {
        const data = {
            username: document.getElementById("reg-username").value,
            email: document.getElementById("email").value,

            name: {
                fname: document.getElementById("fName").value,
                lname: document.getElementById("lName").value
            },
            retypepass: document.getElementById("reg-repass").value,
            password: document.getElementById("reg-pass").value,
        };
        if (data.retypepass === data.password) {
            $.ajax({
                url: "http://localhost:3000/api/users/register",
                type: "POST",
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function(response) {
                    window.location.replace("/login");
                },
                error: function(response) {
                    showMessage(response.responseJSON.message);
                }
            });
        } else {
            showMessage("Passwords do not match")
        }
    }); // missing end of statement.
});

function showMessage(message) {
    const registration_form = document.getElementById("reg-form");
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
    registration_form.appendChild(d);
}