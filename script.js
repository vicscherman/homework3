 
//Here are our arrays for our different character types//
  var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  var symbols = ["!","@","#","$","%","^","&","*","(",")"] 
//this is our generate password function//
function generatePassword() {

  // these are the prompts the user will see, and is also the UI they'll use to select their password options//
  var numberCharacters = prompt ("Password must be between 8-128 characters. Please input password length")
  var includeUpper = confirm("Include upper case letters?")
  var includeLower = confirm("Include lower case letters?")
  var includeNumbers = confirm("Include numbers?")
  var includeSymbols = confirm("Include special characters?")
  //we need to make sure our user entry for characters is valid. Here we use the parseInt command to make sure our character limit is a whole number, and we assign it to the characterLimit variable//
  var characterLimit = parseInt(numberCharacters);
   //here we're defining all our invalid conditions. Essentially if the user doesn't specify any of our prompts, or enters a character limit that's less than 8 or more than 128, they get an alert telling them it's not valid, and the process stops//
  if (
    (!includeUpper && !includeLower && !includeNumbers && !includeSymbols) 
    || (characterLimit > 128 || characterLimit < 8) ){
    return alert("Password must be between 8-128 characters and contain at least one other selection")
  }
    //here we have an empty (for now) array where our generated characters are going to go
    var acceptChars = [];

    //here we're specifying what happens when our confirms are selected. For instance, if (includeUpper) is selected, we  specify that our upperCase character array is going to be included in our password array. I used the .concat command, which allows you to merge multiple arrays into a single array since we will need to do that if multiple character types are selected//
    if (includeUpper) {
      acceptChars = acceptChars.concat(upperCase)
    }
    
    if (includeLower){
      acceptChars = acceptChars.concat(lowerCase)
    }
    
    if (includeNumbers){
      acceptChars = acceptChars.concat(numbers)
    }
    
    if (includeSymbols){
      acceptChars = acceptChars.concat(symbols)
    }
    
    

    

    //this was the trickiest bit for me to understand and get to work. We created a variable called pass, which we first leave as an empty string//
    var pass= "";
    //now, we create a for loop. We specify a variable, i, and initially set it to 0. As long as i is less than the character limit we specified, it keeps increasing by 1. This means this function will repeat the specified number of times
    for(var i = 0; i < characterLimit;i++){
      //we now create a variable called selectedcharacterindex, which is equal to a whole, random number multiplied by the length of our acceptedChars array
      var selectedCharacterIndex = parseInt(Math.random()*acceptChars.length)
      //here we're using the += operator, which adds our accepted characters pulled from the selected character index to our password
      pass += acceptChars[selectedCharacterIndex]
      

    

    



    }
     return pass;
  }

    

  
    




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

if (!password) {
  return;
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  

  

  



