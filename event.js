var users = [];

// clean code
function validationForm(user) {
  if (user.email === "" || user.password === "" || user.confirmPass === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password qua ngan!");
    return false;
  }

  if (user.password !== user.confirmPass) {
    alert("Mat khau nhap lai khong khop!");
    return false;
  }

  return true;
}
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

  if (validationForm(userInfor)) {
    users.push(userInfor);
    // Buoc 3: Đưa vào localStorage.
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
    return;
  }
}
