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
inforElement.innerHTML = content;

// ! Cach 2:
const inforElement2 = document.createElement("div");
inforElement2.innerHTML = content;
