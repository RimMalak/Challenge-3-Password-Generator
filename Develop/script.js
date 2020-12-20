// Assignment code here

// Global variables declaration.
var pLength;
var lowCase;
var upCase;
var numChar;
var spChar;

// Function to validate the password's min and max length.
var psswdLength = function()
{
  pLength = window.prompt("Please select the length of your password, MIN of 8 characters and MAX of 128.");
  if (pLength)
  {
    pLength = parseInt(pLength);

    if (pLength < 8 || pLength > 128)
      {
        pLength = window.prompt("Invalid length! Please select the length of your password, MIN of 8 and MAX of 128 characters.");
        psswdLength();
      }
    psswdCharType();  // Next function call: to input the character types
  }
  else
  {
    window.alert("Goodbye!")  // the user can abort the process at the start if does not wish to continue.
  }
};

// function that allows selection and validation of character types.
var psswdCharType = function()
{
  lowCase = window.confirm("Include LOWERCASE characters?  Click 'OK' for yes or cancel for 'NO'");
  upCase = window.confirm("Include UPPERCASE characters?  Click 'OK' for yes or cancel for 'NO'");
  numChar = window.confirm("Include NUMERIC characters? Click 'OK' for yes or cancel for 'NO'");
  spChar = window.confirm("Include SPECIAL characters? Click 'OK' for yes or cancel for 'NO'");

  if (lowCase != true && upCase != true && numChar != true && spChar != true )
  {
    window.alert("Please choose at least ONE of these options");
    psswdCharType();
  }
  writePassword()  // calls the write to textarea function(supplied) which in turn calls the password generator function.
};

// password generator function
var pGenerator = function()
{
  var psswdRand = "";
  var lowChar = 'abcdefghijklmnopqrstuvwxyz';
  var upChar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numVal  = '0123456789';
  var spVal   = '!"&()*+,%-./$:;<=>#?@[\]^_`{|}~';
  var i = 0;
  
  while (i < pLength)
  {
    if (lowCase && i < pLength)
    {
      psswdRand += lowChar.charAt(Math.floor(Math.random() * Math.floor(26)));
      i++;
    }
    if(upCase && i < pLength)
    {
      psswdRand += upChar.charAt(Math.floor(Math.random() * Math.floor(26)));
      i++;
    }
    if (numChar && i < pLength)
    {
      psswdRand += numVal.charAt(Math.floor(Math.random()*10));
      i++;
    }
    if (spChar && i < pLength)
    {
      psswdRand += spVal.charAt(Math.floor(Math.random() * Math.floor(31)));
      i++;
    }
  }
  return psswdRand;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password =  pGenerator(); // the password value is returned by the password generator function to be sent to textarea.
  var passwordText = document.querySelector("#password");

  passwordText.value =  password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", psswdLength); // on click: call the starting function: psswdLength.






