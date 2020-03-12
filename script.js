// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password based on user criteria
function generatePassword(){

  // Variable storing length of password
  var length = prompt("Type in character length between 8 and 128");
  
  // Checks to see if user inputed a valid length
  if(length < 8 || length > 128){
    alert("Must be a number between 8 and 128");
    return;
  }
  
  // Variable containing valid password characters
  var validCharacters = [];

  // Variables storing User Response
  var lower = confirm("Would you like to include lowercase letters?");

  // Checks to see if they want lower and applies all lower case letters
  if(lower){
    for(let i = 97; i <= 122; i++){
      validCharacters.push(String.fromCharCode(i));
    }
  }

  //Confirms if they want uppercase letters
  var upper = confirm("Would you like to include upper case letters?");

  //Checks to see if they want Upper case characters and applies all upper case letters
  if(upper) {
    for (let i = 65; i <= 90; i++) {
      validCharacters.push(String.fromCharCode(i));    
    }
  }

  //Confirms if they want numbers
  var numerical = confirm("Would you like to include numbers?");

  // Checks if they want numbers and applies number 0-9
  if(numerical) {
    for (let i = 48; i <= 57;  i++) {
      validCharacters.push(String.fromCharCode(i));
    }
  }

  //Confirms if they want special characters
  var special = confirm("Would you like to include special characters?");

  //Checks if they want numbers and applies selected special characters
  if(special) 
  {
    for (let i = 33; i <= 47; i++) {
      validCharacters.push(String.fromCharCode(i));
      
    }

    for (let i = 58; i <= 64; i++) {
      validCharacters.push(String.fromCharCode(i));
      
    }

    for (let i = 91; i <= 96; i++) {
      validCharacters.push(String.fromCharCode(i));
      
    }

    for (let i = 123; i <= 126; i++) {
      validCharacters.push(String.fromCharCode(i));
      
    }
  } 
 

  // Variable storing the password
  var pass = "";
  
  //password is generated from validcharacters and mathfloor/random picks values
  //from length of valid characters 
  for(let i = 0; i < length; i++){
    pass += validCharacters[Math.floor(Math.random() * validCharacters.length)];
  }

  //returns generated password
  return pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





