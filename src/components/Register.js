import { router } from "../utils/common";
import { registerValid } from "../validations/auth.valid";

const users = [];
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  // Buoc 2:
  var userInfor = {
    email: email,
    password: password,
  };

  if (registerValid({ ...userInfor, confirmPass })) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userInfor,
        role: "member",
        address: "",
        cart: [],
        history: [],
        comment: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
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
      })
      .catch((err) => console.log(err));
  }
}

export default register;
