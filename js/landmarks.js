$(document).ready(function() {
    var modal = $('.popup'),
                    overlay = $('.overlay'),
                    link = $('button[data-popup="true"]'),
                    close = $('.close-btn');

    close.click(function() {
        modal.toggleClass('popup_active');
        overlay.hide();
    });
    link.on('click', function () {
        overlay.show();
        modal.toggleClass('popup_active');
    });
});

function validateForms() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    
    if (name == "") {
        error.innerText = "Please input valid name";
        error.style.color = "red";
        return false;
    }

    if (!email.includes("@")) {
        error.innerText = "Please input valid email";
        error.style.color = "red";
        return false;
    }
}







