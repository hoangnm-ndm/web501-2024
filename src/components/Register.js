import instance from "../api";
import { router } from "../utils/common";
import { registerValid } from "../validations/auth.valid";

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var userInfor = {
    email: email,
    password: password,
  };

  if (registerValid({ ...userInfor, confirmPass })) {
    // fetch("http://localhost:3000/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...userInfor,
    //     role: "member",
    //     address: "",
    //     cart: [],
    //     history: [],
    //     comment: [],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.user) {
    //       const valueCofirm = confirm(
    //         "Dang ky thanh cong, co muon sang trang dang nhap khong?"
    //       );
    //       if (valueCofirm) {
    //         router.navigate("/signin");
    //       }
    //     } else {
    //       alert(`Error: ${data}`);
    //     }
    //   })
    //   .catch((err) => console.log(err));

    instance
      .post("/register", {
        ...userInfor,
        role: "member",
        address: "",
        cart: [],
        history: [],
        comment: [],
      })
      .then(({ data }) => {
        // ! destructuring
        if (data.user) {
          const valueCofirm = confirm(
            "Dang ky thanh cong, co muon sang trang dang nhap khong?"
          );
          if (valueCofirm) {
            router.navigate("/signin");
          }
        } else {
          alert(`Error: ${data}`);
        }
      });
  }
}

export default register;
