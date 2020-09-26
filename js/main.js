// function to calculate the insurance with the values the user has given
function calculateInsurance(){
	var fullName = document.getElementById("name").value;

	var age = document.getElementById("number").value;

	var country = document.getElementById("countries").value;

	var horsepower = document.getElementById("hp").value;

	//insurance for austria
	var aut = (horsepower * 100) / (Number(age) + 50);
	var insuranceAut = aut.toFixed(2); //to get two digits after the comma

	//insurance for hungary
	var hun = (horsepower * 120) / (Number(age) + 100);
	var insuranceHun = hun.toFixed(2);

	//insurance for greece
	var gre = (horsepower * 150) / ((Number(age)+3) + 50);
	var insuranceGre = gre.toFixed(2);

	// if condition to print the right insurance for the selected country
	if (country == "Austria"){
		document.getElementById("output").innerHTML = (fullName + ", your insurance costs " + insuranceAut + " €");
	} else if (country == "Hungary"){
		document.getElementById("output").innerHTML = (fullName + ", your insurance costs " + insuranceHun + " €");
	} else {
		document.getElementById("output").innerHTML = (fullName + ", your insurance costs " + insuranceGre + " €");
	}

	
}

document.getElementById("submit").addEventListener("click",calculateInsurance,false);




