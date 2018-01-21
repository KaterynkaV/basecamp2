
function CreateReguest() {
	var request = false;
	try {
		request = new XMLHttpRequest();
	} catch (failed) {
    	request = false;
    }

	if (!request)
 	alert("Error initializing XMLHttpRequest!");
	return request;
} 

var listUsers = [];

function SendRequestAboutUser(e){
	var request = CreateReguest();
	request.onreadystatechange = processRequestChange;
	request.open("GET", "https://randomuser.me/api/?results=0&inc=name,gender,phone,photo,picture", true);
	request.send(null);
	function processRequestChange() {
		console.log("request.readyState = " + request.readyState);
		if (request.readyState == 4) {
			if (request.status == 200)
				printUser();
			else if (request.status == 404)
				alert("Request URL does not exist");
        	else
        		alert("Error: status code is " + request.status);
        }
        function printUser() {
        	var response, lastName, firstName, phone, picture;
        	response = request.responseText;
     		response = JSON.parse(response);
     		var user = {
     			firstName: response.results[0].name.first,
     			lastName: response.results[0].name.last,
     			phone: response.results[0].phone,
     			picture: response.results[0].picture.medium
     		};
     		listUsers.push(user);
     		var s = "<img src=" + user.picture + ">" + "<br>" +  "<strong>" +  user.firstName + " " + user.lastName + "</strong>" + "<br>" + " phone: " + user.phone ;
    		var my_div = newDiv = null;

     		newDiv = document.createElement("div");
     		newDiv.innerHTML = s;
     	
     		users.appendChild(newDiv);
     	}
    }
    e.preventDefault();
	return false;
}
document.getElementById('addUser').addEventListener( "click" , SendRequestAboutUser);

function SendReguestAboutMessege() {
	var request = CreateReguest();
	request.open("GET", "http://www.randomtext.me/api/gibberish/p-1/1-45/", true);
	request.onreadystatechange = Messege;
	request.send(null);

	function Messege() {
		console.log("request.readyState = " + request.readyState);
		if (request.readyState == 4) {
			if (request.status == 200)
				PrintMessege();
			else if (request.status == 404)
				alert("Request URL does not exist");
			else
				alert("Error: status code is " + request.status);
		}
		function PrintMessege(){
			var response;
			response = request.responseText;
			response = JSON.parse(response);
			var massege = response.text_out;
			var numberUser;
			numberUser = Math.floor(Math.random() * listUsers.length ) ;
			var user = listUsers[numberUser];
			var s = "<img src=" + user.picture + " >" + "<br>" + "<strong>" +  user.firstName + " " + user.lastName + "</strong>"  + "<br>" + massege;
			var my_div = newDiv = null;
			newDiv = document.createElement("div");
			newDiv.innerHTML = s;
			chat.appendChild(newDiv);
		}
	}
}

function RandInterval(min = 5, max = 30) {
	return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

var timerInterval = 5000;
var timerId = setTimeout(PrintUserMassege, timerInterval);

function PrintUserMassege() {
	if(listUsers.length != 0) {
		SendReguestAboutMessege();
		timerInterval = RandInterval();
	}
	timerId = setTimeout(PrintUserMassege,timerInterval);
}

