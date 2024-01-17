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

  if (validRegister(userInfor)) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfor.email,
        password: userInfor.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.user?.email) {
          alert(`Success: ${data.user.email}`);
        } else {
          alert(`Failed: ${data}`);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
}

export default register;
