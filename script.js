var database = [
{
	username: "Connor",
	password: "secret"
}
];

var newsFeed = [ 
{
    username: "Connor",
    timeline: "I'm super bored right now."
},
{
	username: "Angela",
	timeline: "I'm relaxing with my dogs right about now."
}

];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(username, password) {

	if (username === database[0].username && 
		password === database[0].password) {
		console.log(newsFeed);
	}
	else {
		alert("sorry. That's the wrong password.")
	}
}

signIn(userNamePrompt, passwordPrompt);