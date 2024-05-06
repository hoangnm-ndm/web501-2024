console.log("hello nhung code o trong main.js");

const myDocument = {
  html: {
    head: {},
    body: {
      div: {
        div: {
          children: "Hello",
        },
      },
      ul: {
        li: {
          children: "item 1",
        },
        li: {
          children: "item 2",
        },
      },
    },
  },
};

console.log(myDocument);

// TODO: Dùng 3 cách xử lý sự kiện để tạo ra nút bấm, khi bấm nút gọi đến function gửi lời chào đến giảng viên.

function hello() {
  console.log("Xin chao ca lop!");
}

const btn2Element = document.getElementById("btn2");
// console.log(btn2Element);

// ! Cách 2:
// btn2Element.onclick = hello;

// ! Cách 3:
btn2Element.addEventListener("click", hello);

// TODO: Khai báo 1 object thông tin cá nhân của sinh viên trong js. Khi bấm nút "Show Infor" thì hiển thị các thông tin này ra html.

const myInfor = {
  name: "Nguyễn Minh Hoàng",
  age: 18,
  gender: "male",
  email: "hoangnm62@fpt.edu.vn",
  address: "Lục Nam - Bắc Giang",
};

const infor = document.createElement("div");
infor.innerHTML = /*html*/ `
  <h2>${myInfor.name}</h2>
  <p>Address: ${myInfor.address}</p>
  <p>Age: ${myInfor.age}</p>
  <p>Gender: ${myInfor.gender}</p>
`;
document.body.appendChild(infor);
