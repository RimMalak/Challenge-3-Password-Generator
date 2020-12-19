// Assignment code here
var pLength;
var lowCase;
var upCase;
var numChar;
var spChar;
var psswdRand;

var psswdLength = function()
{
  pLength = window.prompt("Please select the length of your password, it should have a MIN of 8 characters and a MAX of 128.");
  if (pLength)
  {
    pLength = parseInt(pLength);

    if (pLength < 8 || pLength > 128)
      {
        pLength = window.prompt("Invalid length! Please select the length of your password, it should have a MIN of 8 and a MAX of 128 characters.");
        psswdLength();
      }
    psswdCharType();
  }
  else
  {
    window.alert("Goodbye!")
  }
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
    writePassword()
  };

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
  window.alert("Your password is : " + psswdRand);
  return psswdRand;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =  pGenerator();//generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value =  password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", psswdLength);






