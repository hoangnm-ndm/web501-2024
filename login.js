// Cach tong quan:
function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiem tra du lieu:
  if (!username || !password) {
    alert("khong duoc bo trong!");
    return;
  }

  if (password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return;
  }

  if (localStorage.getItem("users")) {
    const usersDatabase = JSON.parse(localStorage.getItem("users"));
    usersDatabase.some((item) => {
      if (item.username === username && item.password === password) {
        alert("Dang nhap thanh cong");
      }
      return;
    });
  }
}
