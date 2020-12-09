/* checking if the user is logged in */
if (localStorage.getItem("user") !== null) {
	window.location.href = "news.html";
}

let users;
/* checking sessionstorage for users information or else get the data from users json file */
if(sessionStorage.getItem("users") !== null)
{
	users = JSON.parse(atob(sessionStorage.getItem("users")));
	console.log(users);
}
else
{
	users = jsonObj.users;
}

/* login form submit function */
$("#login_form").submit(function( event ) {
	event.preventDefault();						//prevent form submission
	let flag = false;
	let index = 0;
	console.log($("#username").val(), $.md5($("#password").val(), 'secret'))
	for (let i=0; i<Object.keys(users).length; i++) {
		if(users[i].username == $("#username").val() && users[i].password == $.md5($("#password").val(), 'secret'))			//checking for username and password in the users object
		{
			flag = true;
			index=i;
			break;
		}
	}
	if(flag)
	{
		localStorage.setItem("user", btoa(JSON.stringify(users[index])));			//setting current user's information in location storage in base64 format
		window.location.href = "news.html";											//redirecting to news page
	}
	else
	{
		$("#display_error").html("Invalid username or password");	
	}
});