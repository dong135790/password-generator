// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var result = prompt("What is your name?");
  var random = Math.floor(Math.random() * lowercase.length);
  console.log("RANDOM", random, lowercase[random]);

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);