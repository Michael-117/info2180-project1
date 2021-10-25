
document.addEventListener('DOMContentLoaded', function () {

    var message = document.getElementsByClassName("message");
    var button = document.querySelector("button");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    button.onclick = function (event) {
        email = document.querySelector("input").value;

        if (email.match(mailformat)) {
            message[0].innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";
            event.preventDefault();
        } 
        else {
            message[0].innerHTML = "Please enter a valid email address.";
            event.preventDefault();
        }
    };
})