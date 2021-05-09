const phoneValid = /(\(?\+?\d{1,3}\)?[\s-]+)?\(?\d{1,3}\)?[\s-]+\d{3}[\s-]?\d{2}[\s-]?\d{2}/g;
const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ValidateEmail() {
  var email = document.getElementById("mail")
  var txt = "";
  if (email.validityState.patternMismatch) {
    txt = "Hey there";
  }
  document.getElementById("errormsg").innerHTML= txt;
}
