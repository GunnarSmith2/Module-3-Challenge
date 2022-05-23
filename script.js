// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Character Variables 
var uppercase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*-_=+?{}[]";
var chosen = [];


function generatePassword() {
  // users are asked for password length
  var length = prompt("How many characters would you like you password to be? (Must be between 8 and 128)");
  if(isNaN(length)){
    alert("you must input a valid number!")
  }
  if(length<8 || length> 128) {
    return("You must enter a number between 8 - 128!")
  }
  else {
      alert("Your password will be " + length + " Characters long.");
  }

  // lowercase character input for password
  Haslowercase = confirm("Do you want lowercase characters?");
  if (Haslowercase) {
      var turnTolowercase = alert("Your password will have lowercase characters.");
  }
  else {
      alert("Your password will not have lowercase characters.");
  }

  // upper case character input for password
  HasUppercase = confirm("Do you want uppercase characters?");
  if (HasUppercase) {
      alert("Your password will have uppercase characters.");
  }
  else {
      alert("Your password will not have uppercase characters.");
  }

  // numbers input for password
  hasNumbers = confirm("Do you want numbers in your password?");
  if (hasNumbers) {
      alert("Your password will have numbers.");
  }
  else {
      alert("Your password will not have numbers.");
  }

  // Special characters input for password
  hasSpecial = confirm("Do you want special characters in your password?");
  if (hasSpecial) {
      alert("your password will have special characters.");
  }
  else {
      alert("Your password will not have special characters.");
  }

  // if all character types are selected no 
  if (Haslowercase === false && HasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return("Please select at least one character type.")
  };

  // Selected character groups
  if (Haslowercase) {
      chosen = chosen + lowercase;
  }
  if (HasUppercase) {
      chosen = chosen + uppercase;
  }
  if (hasNumbers) {
      chosen = chosen + numbers;
  }
  if (hasSpecial) {
      chosen = chosen + special;
  }

  // final password return
  let finalPassword = ""
  for (let i = 0; i < length; i++) {
      let rng =[Math.floor(Math.random() * chosen.length)];
      finalPassword = finalPassword + chosen[rng];
  }
  return finalPassword;
};
 

  // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
