userId = () => {
  var userName = document.getElementById('username').value;
  console.log(userName);
  if (!userName) {
    console.log("User ID should not be empty!")
  } else {
    console.log("userId is valid");
  }
}

userPasswordval = () => {
  var userPassword = document.getElementById('userPassword').value;
  if (!userPassword) {
    console.log("User password should not be empty!");
  } else {
    console.log("user password is valid");
  }
}

userNameAlphabet = () => {
  var userNameAlphabet = document.getElementById('username').value;
  var letters = /^[A-Za-z]+$/;
  if (!userNameAlphabet.match(letters)) {
    console.log("User's name should have alphabet characters only!");
  } else {
    console.log("userName is valid");
  }
}

userEmailval = () => {
  var userEmail = document.getElementById('userEmail').value;
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if (!userEmail.match(letterNumber)) {
    console.log("You have entered an invalid email format");
  } else {
    console.log("userEmail is valid");
  }

}

// boolean, null, object, undefined, string, number
