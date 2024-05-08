console.log("Hello ca lop! (main.js)");
const myInfor = {
  name: "Nguyễn Minh Hoàng",
  age: 32,
  email: "hoangnm62@fpt.edu.vn",
  gender: "Male",
  address: "Bắc Giang",
  company: "FPT Polytechnic",
};

// ! Template string
const content = `
  <h2>Name: ${myInfor.name}</h2>
  <p>Age: ${myInfor.age}</p>
  <p>Email: ${myInfor.email} </p>
  <p>Company: ${myInfor.company}</p>
  <p>Gender: ${myInfor.gender}</p>
  <p>Address: ${myInfor.address}</p>
`;

// ! Cach 1:
const inforElement = document.getElementById("infor");
console.log(typeof inforElement);
// inforElement.innerHTML = content;

// ! Cach 2:
const inforElement2 = document.createElement("div");

function showInfor() {
  inforElement.innerHTML = content;
}

const btnShowElement = document.getElementById("btnShow");
console.log(btnShowElement);
btnShowElement.onclick = showInfor;

// ! Cach3: dung addEventListener
const btnShow3Element = document.getElementById("btnShow3");
btnShow3Element.addEventListener("click", showInfor);
