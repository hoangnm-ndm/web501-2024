import { validRegister } from "../validations/auth.valid";
var users = [];

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  var userInfor = {
    email,
    password,
    confirmPass,
  };

  if (validRegister(userInfor)) {
    users.push(userInfor);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
    return;
  }
}

export default register;
