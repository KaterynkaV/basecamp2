/*/
var request = false;

try {
 	 request = new XMLHttpRequest();
} catch (failed) {
     request = false;
}

if (!request)
 alert("Error initializing XMLHttpRequest!");


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
     	firstName = response.results[0].name.first;
     	lastName = response.results[0].name.last;
     	phone = response.results[0].phone;
     	picture = response.results[0].picture.medium;

     	var s = "<img src=" + picture + ">" + "<br>" +   firstName + " " + lastName + "<br>" + " phone: " + phone ;


     	var my_div = newDiv = null;

     	newDiv = document.createElement("div");
     	newDiv.innerHTML = s;
     	
     	users.appendChild(newDiv);
     } 
}

//document.getElementById('addUser').onclick = SendRequest;
//document.getElementById('addUser').addEventListener( "click" , SendRequest);

/*/

/*var request = false;
CreateRequest();

function CreateRequest(){

try {
 	 request = new XMLHttpRequest();
} catch (failed) {
     request = false;
}

if (!request)
 alert("Error initializing XMLHttpRequest!");


request.onreadystatechange = processRequestChange;
}*/

function SendRequest() {
var request = false;

try {
 	 request = new XMLHttpRequest();
} catch (failed) {
     request = false;
}

if (!request)
 alert("Error initializing XMLHttpRequest!");

request.open("GET", "https://randomuser.me/api/?results=0&inc=name,gender,phone,photo,picture", true);
request.onreadystatechange = processRequestChange;
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
     	firstName = response.results[0].name.first;
     	lastName = response.results[0].name.last;
     	phone = response.results[0].phone;
     	picture = response.results[0].picture.medium;

     	var s = "<img src=" + picture + ">" + "<br>" +   firstName + " " + lastName + "<br>" + " phone: " + phone ;


     	var my_div = newDiv = null;

     	newDiv = document.createElement("div");
     	newDiv.innerHTML = s;
     	
     	users.appendChild(newDiv);
     } 
}
}
document.getElementById('addUser').onclick = SendRequest;
/**/