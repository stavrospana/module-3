// Assignment code here
//set the password variables
var passwordBox=document.getElementById("password");
var length = 16;
var characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";
var all = characterUpper + characterLower + numbers + symbols;
//generate using a function and using math to randomize the values


//copied this function to the HTML and added onclick feature to button
function createPassword(){
  let password = "";
  password += characterUpper[Math.floor(Math.random() * characterUpper.length)];
  password += characterLower[Math.floor(Math.random() * characterLower.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random()* symbols.length)];

  while(length > password.length){

    password += all[Math.floor(Math.random() * all.length)];

  }

  passwordBox.value = password;
}
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
