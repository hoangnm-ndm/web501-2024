/**
 * Bước 1: Lấy giá trị từ các ô input ra.
 * Bước 2: Gom các giá trị vào object
 * Bước 3: Lưu object chứa thông tin này vào localStorage
 */
// Cach tong quan:

const users = [];
function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  // Kiem tra du lieu:
  if (!username || !password || !confirmPass) {
    alert("khong duoc bo trong!");
    return;
  }

  if (password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return;
  }

  if (password !== confirmPass) {
    alert("Mat khau nhap lai khong khop!");
    return;
  }

  // Buoc 2:
  var userInfor = {
    username: username,
    password: password,
    confirmPass: confirmPass,
  };
  // Buoc 3:
  // BOM = Browser Object Model
  users.push(userInfor);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Dang ky thanh cong!");
}

// Falsy đại diện cho các giá trị negative
/**
 * Falsy bao gồm:
 * 1. false
 * 2. null
 * 3. undefined
 * 4. NaN
 * 5. ""
 * 6. 0
 */

/**
 * Làm một form đăng nhập với tài khoản đã đăng ký thành công trong localStorage.
 * Nếu khớp username và pass thì báo đăng nhập thành công!
 */
