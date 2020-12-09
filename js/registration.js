/* checking if the user is logged in */
if (localStorage.getItem("user") !== null) {
	window.location.href = "news.html";
}

let users;
/* checking sessionstorage for users information or else get the data from users json file */
if(sessionStorage.getItem("users") !== null)
{
	users = JSON.parse(atob(sessionStorage.getItem("users")));
}
else
{
	users = jsonObj.users;
}

/* registration form submit function */
$( "#registration_form" ).submit(function( event ) {
	event.preventDefault();								//prevent form submission
	checkUserName();
	checkEmail();
	checkPassword();
	checkConfirmPassword();
	if($("#username").next().is(':empty') && $("#email").next().is(':empty') && $("#password").next().is(':empty') && $("#passwordConfirm").next().is(':empty'))					//checking all the entered data is valid by checking the error box
	{
		users.push({
			"username": $("#username").val(),
			"email": $("#email").val(),
			"password": $.md5($("#password").val(), 'secret')
		});
		sessionStorage.setItem("users", btoa(JSON.stringify(users)));			//add new users data to sessionstorage
		window.location.href = "login.html";									//redirect to login page
	}
});

/* fields validation */
/* function to check unique username in the users list */
let checkUserName = () => {
	let flag = false;
	for (let i=0; i<Object.keys(users).length; i++) {
		if(users[i].username == $("#username").val())
		{
			flag = true;
			break;
		}
	}
	if(flag)
	{
		$("#username").next().html("This username is taken!");
	}
	else
	{
		$("#username").next().html("");	
	}
}

/* function to check unique email in the users list */
let checkEmail = () => {
	let flag = false;
	for (let i=0; i<Object.keys(users).length; i++) {
		if(users[i].email == $("#email").val())
		{
			flag = true;
			break;
		}
	}
	if(flag)
	{
		$("#email").next().html("This email is already registered!");
	}
	else
	{
		$("#email").next().html("");	
	}
}

/* function to check password length */
let checkPassword = () => {
	if($("#password").val().length < 8)
	{
		$("#password").next().html("Password need's to be atleast 8 characters long");
	}
	else
	{
		$("#password").next().html("");	
	}
}

/* function to check confirm password matched with the password field */
let checkConfirmPassword = () => {
	if($("#passwordConfirm").val() != $("#password").val())
	{
		$("#passwordConfirm").next().html("Password doesn't match!");
	}
	else
	{
		$("#passwordConfirm").next().html("");	
	}
}