import { registerValid } from "../validations/auth.valid";

const users = [];
function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  // Buoc 2:
  var userInfor = {
    username: username,
    password: password,
    confirmPass: confirmPass,
  };

  // Valid:
  if (registerValid(userInfor)) {
    // Buoc 3:
    users.push(userInfor);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
  }
}

export default register;
