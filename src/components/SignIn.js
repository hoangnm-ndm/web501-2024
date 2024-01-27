import instance from "../api";
import { signInValid } from "../validations/auth.valid";

async function signIn() {
  try {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const user = {
      email,
      password,
    };

    if (signInValid(user)) {
      const { data } = await instance.post("/login", user);
      if (data.user) {
        sessionStorage.setItem("user", JSON.stringify(data));
        const valueCofirm = confirm(
          "Dang nhap thanh cong, co muon sang trang mua sắm khong?"
        );
        if (valueCofirm) {
          router.navigate("/");
        }
      }
    }
  } catch (error) {
    alert(`Error: ${err.response.data}`);
  }
}
export default signIn;
