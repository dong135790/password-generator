// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Whichever generatedList[i] is included (based on prompts), add those values into an empty string (returnValue).
  // 2. Use returnValue, which contains all the items that we want to randomize, and randomize them based on the length prompted.
  // 3. Return new value as trueReturnValue.
  var returnValue = "";
  password = "Password:  ";
    // Dictionary or object in js 
  var generatedList = [
    {lowercase: "abcdefghijklmnopqrstuvwxyz"},
    {uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {numeric: "1234567890"},
    {specialCharacter: "`!@#$%^&*()-=[];',./_+{}:<>?"},
  ];
  
// Promp("whatever is said to user") and returns the value that the user typed as a STRING
  var result = prompt("Please enter a value (Between 8 and 128).");
  // Ensure the characters contain 8-128 characters...
  if (result < 8 || result > 128) {
    alert("Invalid input. Please enter a numeric value between 7 and 129.");
    return;   
  } else {
    // Ask for lowercase letters
    var askLower = prompt("Would you like to include lowercase letters?");
    if (askLower.toUpperCase() == "YES" || askLower.toUpperCase() == "Y") {
      returnValue += generatedList[0].lowercase;
      console.log(returnValue);
      // var randomLower = Math.floor(Math.random() * generatedList[0].lowercase.length);
      // // bugchecks
      // console.log("random", randomLower, generatedList[0].lowercase[randomLower]);
    };
    // Ask for uppercase letters
    var askUpper = prompt("Would you like to include uppercase letters?");
    if (askUpper.toUpperCase() == "YES" || askUpper.toUpperCase() == "Y"){
      returnValue += generatedList[1].uppercase;
      console.log(returnValue);
      // var randomUpper = Math.floor(Math.random() * generatedList[1].uppercase.length);
      // console.log("random", randomUpper, generatedList[1].uppercase[randomUpper]);
    }; 
    // Ask for Numbers
    var askNumeric = prompt("Would you like to include numbers?");
    if (askNumeric.toUpperCase() == "YES" || askNumeric.toUpperCase() == "Y"){
      returnValue += generatedList[2].numeric;
      console.log(returnValue);
      // var randomNumeric = Math.floor(Math.random() * generatedList[2].numeric.length);
      // console.log("random", randomNumeric, generatedList[2].numeric[randomNumeric]);
    }; 
    //Ask for special
    var askSpecial = prompt("Would you like to include special characters?");
    if (askSpecial.toUpperCase() == "YES" || askSpecial.toUpperCase() == "Y"){
      returnValue += generatedList[3].specialCharacter;
      console.log(returnValue);
      // var randomSpecial = Math.floor(Math.random() * generatedList[3].specialCharacter.length);
      // console.log("random", randomSpecial, generatedList[3].specialCharacter[randomSpecial]);
    };
    // Need new variable to randomize returnValue based on length of prompt (result)
    trueReturnValue = "";
    for (var i = 0; i < result; i++){
      // returnValue[] instead of () since we are accessing index numbers, we just redoing it result no. of times
      password += returnValue[Math.floor(Math.random() * returnValue.length)];
      console.log(password);
    };
    return password;
    // Generate password based on input prompt
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);