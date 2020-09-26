var team = JSON.parse(members);

for (let i = 0; i < team.length; i++) {
	document.getElementById("name").innerHTML += "Name: " + team[i].name + "<br>";
	document.getElementById("emailAddress").innerHTML += "E-Mail: " + team[i].email +"<br>";
	document.getElementById("phone").innerHTML += "Phone-Number: " + team[i].phone +"<br>";
	document.getElementById("job").innerHTML += "Job: " + team[i].jobTitle +"<br>";
	document.getElementById("image").innerHTML += "<img src=" + "'" + team[i].image  + "'" + "<br>";

}

//document.write('<img src="img/person2.png">');
