// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Character Variables 
var uppercase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+?{}[]";
var chosen = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // users are asked for password length
  var length = prompt("How many characters would you like you password to be? (Must be between 8 and 128)");
  if(isNaN(length)){
    alert("you must input a number!")
  }
  if(length<8 || length> 128) {
    alert("You must enter a number between 8 - 128!")
  }
  else {
      alert("Your password will be" + length + " Characters long.");
  }

  lowercase
}
   



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
