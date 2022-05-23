// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Character Variables 
var uppercase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+?{}[]";
var chosen = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {}
   



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
