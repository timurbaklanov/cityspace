//Validates Contact Form
function validation() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("emailAddress").value;
    var message = document.getElementById("message").value;
    var err_message = document.getElementById("errMessage");
    var text;

    err_message.style.padding = "10px";

    if (fName.length < 1) {
        text = "First Name field is empty.";
        err_message.innerHTML = text;
        return false;
    }

    if (lName.length < 1) {
        text = "Last Name field is empty.";
        err_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Please enter valid Phone Number.";
        err_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length <= 6) {
        text = "Please enter valid Email.";
        err_message.innerHTML = text;
        return false;
    }

    if (message.length <= 20) {
        text = "Message must contain more than 20 characters.";
        err_message.innerHTML = text;
        return false;
    }
    alert("Form has been submitted successfully.");
    return true;
}

//Closes Contact Form
function closeForm() {
    var contactForm = document.getElementsByClassName('formArea');
    contactForm[0].style.display = "none";
}

function openForm() {
    var contactForm = document.getElementsByClassName('formArea');
    contactForm[0].style.display = "flex";
}
