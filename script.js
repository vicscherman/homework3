// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var numberCharacters = prompt ("Password must be between 8-128 characters. Please input password length")
  var includeUpper = confirm("Include upper case letters?")
  var includeLower = confirm("Include lower case letters?")
  var includeNumbers = confirm("Include numbers?")
  var includeSymbols = confirm("Include special characters?")

  var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = toLowerCase(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  var symbols = ["!","@","#","$","%","^","&","*","(",")"] 
