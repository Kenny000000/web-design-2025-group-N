function donateForm(){
	/* get the element from input fields from the form, then the let function declares it into a variable*/
	let donation = document.getElementById("donation").value;
	let cardName = document.getElementById("cardName").value;
	let cardNumber = document.getElementById("cardNumber").value;
	let emailAddress = document.getElementById("emailAddress").value;
	
	
	/*Checks if the fields are empty, if empty alert pops up*/		
	if(donation =="" || cardName == "" || cardNumber == "" || emailAddress == ""){
		alert("Please Fill in the field before submiting");
		return;
	}
	
	/*If all fields are filled, the id named message pops up and is written through innnerHTML*/
	document.getElementById("message").innerHTML = 
	cardName + ", Thank you for donating £" + donation;
}
