import { signInValid } from "../validations/auth.valid";

function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const user = {
    username,
    password,
  };

  if (signInValid(user)) {
    if (localStorage.getItem("users")) {
      const usersDatabase = JSON.parse(localStorage.getItem("users"));
      usersDatabase.some((item) => {
        if (item.username === username && item.password === password) {
          alert("Dang nhap thanh cong");
        }
      });
    }
  }
}
export default signIn;
