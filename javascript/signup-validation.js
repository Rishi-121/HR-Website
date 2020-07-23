function validation() {
  var name = document.getElementById("exampleInputName1");
  var email = document.getElementById("exampleInputEmail1");
  var password = document.getElementById("exampleInputPassword1");
  var contact = document.getElementById("exampleInputnumber1");

  if (
    name.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value.trim() == "" ||
    contact.value.trim() == ""
  ) {
    alert("No blank value allowed");
    return false;
  } else return true;
}
