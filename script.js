// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedList = [
    {lowercase: "abcdefghijklmnopqrstuvwxyz"},
    {uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {numeric: "1234567890"},
    {specialCharacter: "`!@#$%^&*()-=[];',./_+{}:<>?"},
  ];
  
// Promp("whatever is said to user") and returns the value that the user typed as a STRING
  var result = prompt("Please enter a value (Between 8 and 128).");
  // Ensure the characters contain 8-128 characters.
  if (result < 8 || result > 128) {
    alert("Please enter a value between 8 and 128 characters");
  };

  var askLower = prompt("Would you like to include lowercase letters?");
  if (askLower.toUpperCase() == "YES") {
    var randomLower = Math.floor(Math.random() * generatedList[0].lowercase.length);
    console.log("random", randomLower, generatedList[0].lowercase[randomLower]);
    // TODO
  };

  var askUpper = prompt("Would you like to include uppercase letters?");
  if (askUpper.toUpperCase() == "YES"){
    var randomUpper = Math.floor(Math.random() * generatedList[1].uppercase.length);
    console.log("random", randomUpper, generatedList[1].uppercase[randomUpper]);
    // TODO
  };

  var askNumeric = prompt("Would you like to include numbers?");
  if (askNumeric.toUpperCase() == "YES"){
    var randomNumeric = Math.floor(Math.random() * generatedList[2].numeric.length);
    console.log("random", randomNumeric, generatedList[2].numeric[randomNumeric]);
    // TODO
  };

  var askSpecial = prompt("Would you like to include special characters?");
  if (askSpecial.toUpperCase() == "YES"){
    var randomSpecial = Math.floor(Math.random() * generatedList[3].specialCharacter.length);
    console.log("random", randomSpecial, generatedList[3].specialCharacter[randomSpecial]);
    // TODO
  };
  // var random = Math.floor(Math.random() * generatedList.length);
  // console.log("RANDOM", random, generatedList[random]);

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