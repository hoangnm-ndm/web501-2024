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

  // Buoc 2:
  if (localStorage.getItem("user")) {
    const userDatabase = JSON.parse(localStorage.getItem("user"));
    if (
      userDatabase.username === username &&
      userDatabase.password === password
    ) {
      alert("Dang nhap thanh cong");
      return;
    } else {
      alert("Sai thong tin!");
      return;
    }
  }

  alert("Connect falled!");
  return;
}
