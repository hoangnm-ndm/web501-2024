import { registerAPI } from "../api/auth.api";
import { router } from "../utils/common";
import { validRegister } from "../validations/auth.valid";

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  var userInfor = {
    email,
    password,
    confirmPass,
  };
  console.log(userInfor);

  if (validRegister(userInfor)) {
    // fetch("http://localhost:3000/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: userInfor.email,
    //     password: userInfor.password,
    //   }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data?.user?.email) {
    //       const confirmValue = confirm(
    //         `Success: ${data.user.email}, chuyển sang trang Đăng nhập?`
    //       );
    //       if (confirmValue) {
    //         router.navigate("/login");
    //       }
    //     } else {
    //       alert(`Failed: ${data}`);
    //     }
    //   });

    registerAPI({ email: userInfor.email, password: userInfor.password })
      .then(({ data }) => {
        console.log(data);
        if (data?.user?.email) {
          const confirmValue = confirm(
            `Success: ${data.user.email}, chuyển sang trang Đăng nhập?`
          );
          if (confirmValue) {
            router.navigate("/login");
          }
        }
      })
      .catch(({ response }) => alert(`Error: ${response.data || "failed!"} `));
  }
}

export default register;
