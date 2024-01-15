import validRegister from "../validations/auth.valid";
var users = [];

function register() {
  // Buoc 1: Lay du lieu tu form:
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  // Buoc 2: Gom du lieu vao object
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
