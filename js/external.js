//validates the form before getting submitted
function validateDonations() {
	
	//const takes values from fields
    const amount = document.getElementById("amount").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const card = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const type = document.getElementById("type").value;
    const agree = document.getElementById("agree").checked;

	//const takes error values from fields
    const amouErr = document.getElementById("amount-error");
    const nameErr = document.getElementById("name-error");
    const emailErr = document.getElementById("email-error");
    const cardErr = document.getElementById("card-error");
    const expiryErr = document.getElementById("expiry-error");
    const cvvErr = document.getElementById("cvv-error");
    const typeErr = document.getElementById("type-error");
    const agreeErr = document.getElementById("agree-error");

	// to clear errors
    amouErr.textContent = "";
    nameErr.textContent = "";
    emailErr.textContent = "";
    cardErr.textContent = "";
    expiryErr.textContent = "";
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
    if (card === "" || card.length < 15) {
        cardErr.textContent = "Please enter the correct card Number";
        isValid = false;
    }
    if (expiry === "" || expiry.length < 5) {
        expiryErr.textContent = "Please enter the expiry date correctly.";
        isValid = false;
    }
    if (cvv === "" || cvv.length < 2) {
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

