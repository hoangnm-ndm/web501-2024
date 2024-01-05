function register() {
  /**
   * Lay thong tin dang ky luu vao object userInfor
   * Lay userInfor luu vao localStorage.
   */

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

  // Buoc 3: Đưa vào localStorage.
  localStorage.setItem("tenNguoiDung", JSON.stringify(userInfor));
}
