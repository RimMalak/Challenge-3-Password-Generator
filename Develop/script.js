// Assignment code here

var psswdLength = function()
{
  pLength = window.prompt("Please select the length of your password, it should have a MIN of 8 characters and a MAX of 128.");
  pLength = parseInt(pLength);

  if (pLength < 8 || pLength > 128)
  {
    pLength = window.prompt("Invalid length! Please select the length of your password, it should have a MIN of 8 and a MAX of 128 characters.");
    psswdLength();
  }
  return pLength;
};

var psswdCharType = function()
{
  lowCase = window.confirm("Do you want to include LOWERCASE characters? Please click 'OK' for yes or cancel for 'NO'");
  upCase = window.confirm("Do you want to include UPPERCASE characters? Please click 'OK' for yes or cancel for 'NO'");
  numChar = window.confirm("Do you want to include NUMERIC characters? Please click 'OK' for yes or cancel for 'NO'");
  spChar = window.confirm("Do you want to include SPECIAL characters? Please click 'OK' for yes or cancel for 'NO'");

  if (lowCase != true && upCase != true && numChar != true && spChar != true )
  {
    window.alert("Please choose at least ONE of these options");
    psswdCharType();
  }
};

var concatDisplay = function()
{

}



//var type = [lowerCase, upperCase, numeric, special];

//parseInt(length) = window.alert("Please select the length of your password, it should have a MIN of 8 characters and a MAX of 128.");
//type = window.alert("Please select at LEAST ONE of the character types to include in your password: 1 LOWER-CASE, ");



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

psswdLength();
psswdCharType();