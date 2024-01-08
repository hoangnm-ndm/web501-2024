/**
 * Xây dựng trang đăng nhập, nếu tài khoản nhập vào khớp thông tin trong localStorage thì báo "Thành công!"
 */

function validationForm(user) {
  if (user.email === "" || user.password === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password qua ngan!");
    return false;
  }

  return true;
}

function login() {
  // Buoc 1: Lay du lieu tu form:
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Buoc 2: Gom du lieu vao object
  var userInfor = {
    email,
    password,
  };

  if (validationForm(userInfor)) {
    var dataUsers = JSON.parse(localStorage.getItem("users"));
    if (dataUsers && dataUsers.length > 0) {
      dataUsers.some((item) => {
        if (item.email === email && item.password === password) {
          alert("Dang nhap thanh cong!");
          return;
        }
      });
    }
  }
}
