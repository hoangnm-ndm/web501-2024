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
