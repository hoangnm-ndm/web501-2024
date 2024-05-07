console.log("Hello ca lop nhung o trong main.js!");
const myDocument = {
  html: {
    head: {
      title: "Mon hoc ECMAScript 6+",
    },
    body: {
      div: {
        h1: "Nguyen Minh Hoang",
        button: "show more",
      },
    },
  },
};

console.log(myDocument);

const myInfor = {
  name: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Bắc Giang",
  gender: "male",
  email: "hoangnm62@fpt.edu.vn",
};

// ! Template string
const content = /*html*/ `
  <div class="card">
    <h2>Tên: ${myInfor.name}</h2>
    <p>Tuổi: ${myInfor.age}</p>
    <p>Quê: ${myInfor.address}</p>
    <p>Giới tính: ${myInfor.gender}</p>
    <p>Email: ${myInfor.email}</p>
  </div>
`;

const inforElement = document.getElementById("infor");

const h1Element = document.getElementsByTagName("h1")[0];
h1Element.style.color = "red";

function showInfor() {
  inforElement.innerHTML = content;
}
// ! classList.toggle

// ! Cach 2: Xu ly su kien:
const btn2Element = document.getElementById("btn2");
// btn2Element.onclick = showInfor;

// ! Cach 3: Xu ly su kien voi addEventListener
btn2Element.addEventListener("click", showInfor);
