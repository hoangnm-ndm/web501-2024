var loginElement = document.getElementById("btn-login");
console.log(loginElement);
function login() {
  console.log("Dang nhap thanh cong!");
}
loginElement.onclick = login;

// addEventListener
var loginElement3 = document.getElementById("btn-login-3");
loginElement3.addEventListener("click", login);

// var myOto = {
//   color: "red",
//   run: function() {
//   }
// }
