// function hello() {
//   console.log("Xin chao!");
// }

// var btn2Element = document.getElementsByClassName("btn2")[0];
// btn2Element.onclick = hello;
// var btn2Element3 = document.getElementsByClassName("btn2")[1];
// console.log(btn2Element3);
// btn2Element3.addEventListener("click", hello);

/**
 * Bước 1: Lấy giá trị từ các ô input ra.
 * Bước 2: Gom các giá trị vào object
 * Bước 3: Lưu object chứa thông tin này vào localStorage
 */
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
  // Buoc 3:
  // BOM = Browser Object Model
  localStorage.setItem("user", JSON.stringify(userInfor));
}
