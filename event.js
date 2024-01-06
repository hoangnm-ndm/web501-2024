/**
 * Bước 1: Lấy giá trị từ các ô input ra.
 * Bước 2: Gom các giá trị vào object
 * Bước 3: Lưu object chứa thông tin này vào localStorage
 */
// Cach tong quan:
function validationForm({ ...args }) {}
function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  // Kiem tra du lieu:
  if (username === "" || password === "" || confirmPass === "") {
    alert("khong duoc bo trong!");
  }

  if (password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
  }

  if (password !== confirmPass) {
    alert("Mat khau nhap lai khong khop!");
  }

  // Buoc 2:
  var userInfor = {
    username: username,
    password: password,
    confirmPass: confirmPass,
  };
  // Buoc 3:
  // BOM = Browser Object Model
  localStorage.setItem("user", JSON.stringify(userInfor));
  alert("Dang ky thanh cong!");
}
