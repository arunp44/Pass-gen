// Assignment code here
var password=document.getElementById("password");

 function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = 7;
    while (pass < 8) {
      pass = prompt("Enter password lenght (8-128)", "Password")
    }
    ;
    let text;
    if (pass == null || pass == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "pass length";
    }
    var passwordLength = pass;
    //var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

// function for password generdator from:
//https://dev.to/code_mystery/random-password-generator-using-javascript-6a


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.value;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
