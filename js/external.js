//validates the form before getting submitted
function validateDonations() {
	
	//const takes values from fields
    const amount = document.getElementById("amount").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const card = document.getElementById("cardNumber").value;
    const cvv = document.getElementById("cvv").value;
    const type = document.getElementById("type").value;
    const agree = document.getElementById("agree").checked;

	//const takes error values from fields
    const amouErr = document.getElementById("amount-error");
    const nameErr = document.getElementById("name-error");
    const emailErr = document.getElementById("email-error");
    const cardErr = document.getElementById("card-error");
    const cvvErr = document.getElementById("cvv-error");
    const typeErr = document.getElementById("type-error");
    const agreeErr = document.getElementById("agree-error");

	// to clear errors
    amouErr.textContent = "";
    nameErr.textContent = "";
    emailErr.textContent = "";
    cardErr.textContent = "";
    cvvErr.textContent = "";
    typeErr.textContent = "";
    agreeErr.textContent = "";
	
	// declare isValid value true
    let isValid = true;
	
	//if statement to check the values for each fields
    if (amount === "") {
        amouErr.textContent = "Please enter an amount";
        isValid = false;
    }
    if (name === "" || name.length < 3) {
        nameErr.textContent = "Please enter your name properly.";
        isValid = false;
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (card === "" || card.length !== 16) {
        cardErr.textContent = "Please enter the correct card Number";
        isValid = false;
    }
    if (cvv === "" || cvv.length !== 3) {
		cvvErr.textContent = "Please input the three digit CVV";
		isValid = false;
    }
    if (type === "") {
        typeErr.textContent = "Please enter a type of payment";
        isValid = false;
    }
    if (!agree) {
        agreeErr.textContent = "Please agree to the above information.";
        isValid = false;
    }
	 if (isValid) {
		alert("Form submitted successfully!");
		return true;
	} else {
		return false; 
	}

    return isValid;
}
// resets the values for the field
function resetDonations() {
    document.getElementById("amount-error").textContent = "";
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("card-error").textContent = "";
    document.getElementById("expiry-error").textContent = "";
    document.getElementById("cvv-error").textContent = "";
    document.getElementById("type-error").textContent = "";
    document.getElementById("agree-error").textContent = "";
}

function validateExpiry() {
	// get input fields from id
	const field = document.getElementById("expiry");
	// get error input field from id
	const expiryError = document.getElementById("expiry-error");
	const value = field.value.trim();
	expiryError.textContent = "";
	
	// checks if empty
	if (value === ""){
		expiryError.textContent = "Please enter expiry date";
		return false;
	}
	// checks for forward slash
	if(!value.includes("/")){
		expiryError.textContent = "Please rewrite as MM/YY";
		return false;
	}
	
	// splits string from "mm/yy" into an array of [mm,yy], which is stored in expirySplit
	const expirySplit = value.split("/");
	if(expirySplit.length !== 2){
		expiryError.textContent = "Please remove the extra /";
		return false;
	}
	
	//expirySplit = [mm,yy]
	let month = expirySplit[0];
	let year = expirySplit[1];
	
	// ! Not logic operator
	// "//" the start and end of the regex 
	// ^ the matching starts at the start
	// \d matches any digit from 0 to 9 but in my case i needed 2
	// {2} a quantifier that states exactly 2
	// $ the end tag
	if (!/^\d{2}$/.test(month)){
		expiryError.textContent = "Month has to be 2 digits";
		return false;
	}
	// ".test" to check for exactly 2 digit
	if (!/^\d{2}$/.test(year)) {
		expiryError.textContent = "Year has to be 2 digits";
		return false;
	}
	
	
	month = parseInt(month, 10); //turns string from "09" to int = 9
	let fullYear = 2000 + parseInt(year, 10); 
	
	if (month < 1 || month > 12) {
		expiryError.textContent = "Month only between 1 and 12";
		return false;
	}
	
	const now = new Date(); // javaScript date function
	const nowMonth = now.getMonth() + 1; //incremented 1 since it starts from 0/11 rather than 1/12
	const nowYear = now.getFullYear();
	// "()" starts end the group of statement
	const expiredCard = (fullYear < nowYear) || (fullYear === nowYear && month < nowMonth);
	
	if (expiredCard) {
		expiryError.textContent = "This card is out of date";
		return false;
	}
	
	// once everything is checked," return true" lets user get out of function
	return true;
}	

	
	