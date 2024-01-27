import instance from "../apis";
import { validRegister } from "../validations/auth.valid";

const handleSubmitRegister = () => {
  const btnRegister = document.getElementById("btnRegister");
  console.log(btnRegister);
  btnRegister.onclick = handleRegister;
};
const handleRegister = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPass").value;
  const user = {
    email,
    password,
  };

  console.log(user);
  console.log(confirmPass);

  if (validRegister({ ...user, confirmPass })) {
    const { data } = await instance.post("/register", {
      ...user,
      role: "member",
      cart: [],
      address: "",
      phoneNumber: "",
    });
    console.log(data);
  }
};

export default handleSubmitRegister;
