let email = document.getElementById("mail");
let name = document.getElementById("name")
let message = document.getElementById("message")
let button = document.getElementById("subBut")
let errorBox = document.getElementById("errorBox")

button.addEventListener("click", validateData);

function validateData() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.value).toLowerCase()) === false) {
        postError("Λάθος διεύθυνση e-mail. Παρακαλώ επιβεβαιώστε την.")
    } else {
        errorBox.innerHTML = "";
        if (name.value === "") {
            postError("Παρακαλώ εισάγετε το όνομα σας!")

        } else {
            errorBox.innerHTML = "";
            if (message.value === "") {
                postError("Παρακαλώ εισάγετε το μήνυμα σας!")
            } else {
                errorBox.innerHTML = "";
                postData();
            }
        }
    }
}

function postData() {
    const data = {
        mail: email.value,
        name: name.value,
        message: message.value,
    };
    console.log(data);


    $.ajax({
        url: "http://localhost:3000/api/contact/submit",
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response) {
            window.alert("Ευχαριστούμε για τα σχόλια σας!")
            window.location.replace("/");
        },
        error: function(response) {
            postError('Πρόβλημα με την επικοινωνία. Παρακαλώ δοκιμάστε αργότερα.');
        }
    });
}


function postError(text) {
    errorBox.innerHTML = "";
    let error = document.createElement("div")
    let errorText = document.createTextNode(text);
    error.appendChild(errorText);
    error.setAttribute("class", "alert alert-danger p-3");
    errorBox.appendChild(error);
}