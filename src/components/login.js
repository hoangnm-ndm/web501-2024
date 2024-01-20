import { loginAPI } from "../api/auth.api";
import { router } from "../utils/common";
import { validLogin } from "../validations/auth.valid";

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    email,
    password,
  };
  console.log(user);

  if (validLogin(user)) {
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (data?.user?.email) {
    //       const confirmValue = confirm(
    //         `Dang nhap thanh cong: ${data.user.email}, chuyển sang trang chủ?`
    //       );
    //       if (confirmValue) {
    //         router.navigate("/");
    //       }
    //     } else {
    //       alert(`Error: ${data}`);
    //     }
    //   });

    loginAPI(user)
      .then(({ data }) => {
        const confirmValue = confirm(
          `Dang nhap thanh cong: ${data.user.email}, chuyển sang trang chủ?`
        );
        if (confirmValue) {
          router.navigate("/");
        }
      })
      .catch(({ response }) => alert(`Error: ${response.data || "Failed!"} `));
  }
}

export default login;
