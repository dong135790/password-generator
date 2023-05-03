// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedList = [
    {lowercase:  "abcdefghijklmnopqrstuvwxyz"},
    {uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {numeric: "1234567890"},
    {specialCharacter: "`!@#$%^&*()-=[];',./_+{}:<>?"},
  ];

  var result = prompt("Please enter a value (Between 8 and 128 characters).");
  if (result.length < 8 || result.length > 128) {
    console.log("Hello");
    alert("Please enter a value between 8 and 128 characters");
  };
  // var random = Math.floor(Math.random() * generatedList.length);
  // console.log("RANDOM", random, generatedList[random]);

  // return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);