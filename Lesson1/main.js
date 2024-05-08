console.log("Hello ca lop nhưng ở trong main.js");

const myInfor = {
  name: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Bắc Giang",
  gender: "male",
  email: "hoangnm62@gmail.com",
};

const content = /*html*/ `
  <div class="infor-card">
    <h2>${myInfor.name}</h2>
    <p>Tuổi: ${myInfor.age} </p>
    <p>Địa chỉ: ${myInfor.address}</p>
    <p>Email: ${myInfor.email}</p>
    <p>Giới tính: ${myInfor.gender}</p>
  </div>
`;
// ! `` được gọi là template string
console.log(typeof content);
const inforElement = document.getElementById("infor");
inforElement.innerHTML = content;

const myDocument = {
  html: {
    head: {},
    body: {
      div: {
        children: "Hello ca lop!",
      },
    },
  },
};

console.log(myDocument);

function hello() {
  console.warn("Ai buon ngu thi di rua mat di!");
}

// ! Cach 2: Xu ly su kien
const btn2Element = document.getElementById("btn2");
console.log(typeof btn2Element);
// btn2Element.onclick = hello;

// ! Cach 3: Xu ly su kien
btn2Element.addEventListener("click", hello);
