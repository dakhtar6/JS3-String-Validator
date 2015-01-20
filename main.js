var phoneNumber = prompt("What is your phone number?");

alert(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-");

var birthDate = prompt("When is your birthday?");
var hasSlashes = birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/"; 
var birthdayLength = birthDate.length === 8;
var birthdayDigits = birthDate[0] <= 1 || birthDate[3] <= 3;

if (hasSlashes && birthdayLength && birthdayDigits) {
	alert(true);
} else {
	alert(false);
}

var postalCode = prompt("And your zipcode please?"); 
console.log(typeof parseFloat(postalCode))
var postalCodeNum = typeof parseFloat(postalCode) === "number";
var postalCodeLength = postalCode.length === 5 || postalCode.length === 10;
console.log(postalCodeNum)
if (postalCodeNum && postalCodeLength) {
	alert(true);
} else {
	alert(false);
}; 

var state = prompt("The state?");

var stateLength = state.length === 2
var stateCaps = state === state.toUpperCase()

if (stateLength && stateCaps) {
	alert(true);
} else {
	alert(false);
}

var married = prompt("And lastly, are you married?");

if (married === "yes" || married === "Yes" || married === "YES") {
	alert("Congratulations on convincing another human to agree to spend their life with you!");
} else if (married === "no" || married === "No" || married === "NO") {
	alert("Ahhh...Enjoying the single life I see!")
} else {
	alert("That is not a valid answer")
};

 

