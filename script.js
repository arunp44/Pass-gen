// Assignment code here
var password=document.getElementById("password");

 function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = 6;
    while (pass < 7) {
      pass = prompt("Enter password lenght (8-128)", "Length")
    };
      function numbs() {
        nums = prompt("Would you like the password to have numbers?", "nums")
        // let answer = prompt("(yes or no)");
        if (nums.toLowerCase() === "yes") {
          chars = "0123456789";
          specialchar();
        } else if (nums.toLowerCase() === "no") {
          chars = "";
          specialchar();
        }
      }
        
        function specialchar() {
        spchar = prompt("Would you like your password to have special chars", "(@#$%^&*())?")
        // let answer2 = prompt(question + "(yes or no)");
          if (spchar.toLowerCase() === "yes") {
            chars = "!@#$%^&*()" + chars;
            console.log(chars);
            uppercase();
          } else if (spchar.toLowerCase() === "no") {
            // chars = "";
            uppercase();
          }
        }

        function uppercase() {
        upcase = prompt("Would you like upper case letters in your password?", "UPPERCASE")
        // let ans = prompt(question + "(yes or no)");
          if (upcase.toLowerCase() === "yes") {
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + chars;
            lowcase();
          } else if (upcase.toLowerCase() === "no") {
            // chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
            lowcase();
          }
        }

        function lowcase() {
        lcase = prompt("Would you like lower case letters in your password?", "lowercase")
        // let answer3 = prompt(question + "(yes or no)");
          if (lcase.toLowerCase() === "yes") {
            chars = "abcdefghijklmnopqrstuvwxyz" + chars;
          } else if (lcase.toLowerCase() === "no") {
            // chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          }
        }
      numbs()
        if(!chars) {
          alert("Must choose 1 option!!")
          numbs()
        }
        console.log(chars)
        
    let text;
    if (pass == null || pass == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "pass length";
    }
    var passwordLength = pass;
    //var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength - 1; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
     };

// function for password generdator from:
//https://dev.to/code_mystery/random-password-generator-using-javascript-6a


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // console.log(password);
  // passwordText.value = password.value;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
