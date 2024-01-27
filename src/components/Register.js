import instance from "../api";
import { router } from "../utils/common";
import { registerValid } from "../validations/auth.valid";

async function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var userInfor = {
    email,
    password,
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

    // // ! Sử dụng axios
    // instance
    //   .post("/register", {
    //     ...userInfor,
    //     role: "member",
    //     address: "",
    //     cart: [],
    //     history: [],
    //     comment: [],
    //     phoneNumber: "",
    //   })
    //   .then(({ data }) => {
    //     // ! destructuring
    //     if (data.user) {
    //       const valueCofirm = confirm(
    //         "Dang ky thanh cong, co muon sang trang dang nhap khong?"
    //       );
    //       if (valueCofirm) {
    //         router.navigate("/signin");
    //       }
    //     }
    //   })
    //   .catch((err) => alert(`Error: ${err.response.data}`));

    // ! Sử dụng axios kết hợp cú pháp async/await
    try {
      const { data } = await instance.post("/register", {
        ...userInfor,
        role: "member",
        address: "",
        cart: [],
        history: [],
        comment: [],
        phoneNumber: "",
      });
      if (data.user) {
        const valueCofirm = confirm(
          "Dang ky thanh cong, co muon sang trang dang nhap khong?"
        );
        if (valueCofirm) {
          router.navigate("/signin");
        }
      }
    } catch (err) {
      alert(`Error: ${err.response.data}`);
    }
  }
}

export default register;
