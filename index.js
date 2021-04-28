const phoneValid = /(\(?\+?\d{1,3}\)?[\s-]+)?\(?\d{1,3}\)?[\s-]+\d{3}[\s-]?\d{2}[\s-]?\d{2}/g;
const emailValid= /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

function ValidateEmail() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(validRegex)) {
    document.getElementById("errormsg").innerHTML="Valid email address!";
    return true;
  } else {
    document.getElementById("errormsg").innerHTML="Invalid email address!";
    alert("Invalid email address!");
    return false;
  }
