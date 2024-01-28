import instance from "../apis";
import { validRegister } from "../validations/auth.valid";

const handleSubmitRegister = () => {
  const btnRegister = document.getElementById("btnRegister");
  console.log(btnRegister);
  btnRegister.onclick = handleRegister;
};
const handleRegister = async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    const user = {
      email,
      password,
    };

    if (validRegister({ ...user, confirmPass })) {
      const { data } = await instance.post("/register", {
        ...user,
        role: "member",
        cart: [],
        address: "",
        phoneNumber: "",
      });
      if (data) {
        const confirmValue = confirm(
          "Đăng ký thành công, bạn có muốn đăng nhập không?"
        );
        if (confirmValue) {
          window.location.href = "/login";
        }
      }
    }
  } catch (error) {
    // throw new Error(exception);
    console.log(error);
  }
};

export default handleSubmitRegister;
