/* checking if the user has already logged in or not */
if (localStorage.getItem("user") === null) {		//not logged in 
	window.location.href = "login.html";			//redirect to login page
}
else
{
	let user = JSON.parse(atob(localStorage.getItem("user")));			//get user information
	let html = '<i class="fas fa-user"> '+user.username+'</i>';			//display username in navigation bar
	$(".user_info").html(html);
}

/* logout function */
let logout = () => {
	localStorage.removeItem("user");
	window.location.href = "login.html";
}