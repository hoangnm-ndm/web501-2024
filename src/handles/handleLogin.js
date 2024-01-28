import instance from "../apis";
import { validLogin, validRegister } from "../validations/auth.valid";

const handleLogin = () => {
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.onclick = login;
};
const login = async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
      email,
      password,
    };

    if (validLogin({ ...user })) {
      const { data } = await instance.post("/login", user);
      if (data) {
        sessionStorage.setItem("user", JSON.stringify(data));
        const confirmValue = confirm(
          "Đăng nhập thành công, chuyển sang homepage?"
        );
        if (confirmValue) {
          window.location.href = "/";
        }
      }
    }
  } catch (error) {
    // throw new Error(exception);
    console.log(error);
  }
};

export default handleLogin;
