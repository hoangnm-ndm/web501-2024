console.log("Xin chao ca lop!");

var myDocument = {
  html: {
    head: {
      title: "Tieu de trang web",
    },
    body: {
      h1: "Ten mon hoc la ES6+",
    },
  },
};

// console.log(myDocument);

var h1Element1 = document.getElementById("tieuDe");
var h1Element2 = document.getElementsByClassName("title")[0];
var h1Element3 = document.querySelector("h1.title");
var h1Element4 = document.querySelectorAll("h1.title")[0];
var h1Element5 = document.getElementsByTagName("h1")[0];
console.log(h1Element1);
console.log(h1Element2);
console.log(h1Element3);
console.log(h1Element4);
console.log(h1Element5);
h1Element1.style.backgroundColor = "red";

// Tạo 1 object chứa thông tin cá nhân, rồi in ra màn hình

var myInfor = {
  myName: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Bắc Giang",
  mssv: "PH1234",
};

var myInforElement = document.getElementsByClassName("myInfor")[0];
console.log(myInforElement);
// Chú thích 1 dòng
/**
 * `` được gọi là cú pháp template string
 * ${Ghi biểu thức, tên biến trong cú pháp template string}
 */
myInforElement.innerHTML = `
<div class="infor-inner">
  <h2>Tên: ${myInfor.myName}</h2>
  <div class="age">Tuổi: ${myInfor.age + 1}</div>
  <div class="address">Địa chỉ: ${myInfor.address}</div>
  <div>Mã số sinh viên: ${myInfor.mssv}</div>
</div>
`;

// Bài tập: in ra màn hình thông tin cá nhân lấy từ biến myInfor.
// Gợi ý:
// JS có thể tạo ra element.
// document.createElement("div")
// innerText, innerHTML
