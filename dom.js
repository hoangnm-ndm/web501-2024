/**
 * Có bao nhiêu cách lấy 1 element bằng JS?
 */

var h1Element1 = document.getElementById("tieuDe");
var h1Element2 = document.getElementsByClassName("title")[0];
var h1Element3 = document.getElementsByTagName("h1")[0];
// cách khác: querySelector, querySelectorAll, name...
// console.log(h1Element1);
// console.log(h1Element2);
// console.log(h1Element3);

var myInfor = {
  myName: "Nguyễn Minh Hoàng",
  myAge: 18,
  email: "hoangnm62@fpt.edu.vn",
  major: "frontend",
  position: "Giám đốc xưởng",
  address: "Bắc Giang Lục Nam Bảo Đài",
};

/**
 * Gợi ý:
 * B1: Lấy element có class là infor ra
 * B2: dùng innerHTML để đưa nội dung vào element đó.
 *
 */

var inforElement = document.getElementsByClassName("infor")[0]; //Buoc 1

inforElement.innerHTML = `
<div>
  <h2 class="name">Tên: ${myInfor.myName}</h2>
  <div>Tuổi: ${myInfor.myAge + 1}</div>
  <div>Địa chỉ: ${myInfor.address}</div>
  <div>Vị trí: ${myInfor.position}</div>
</div>
`; // Buoc 2

inforElement.style.color = "red";

/**
 * `` là cú pháp es6 tên là template string.
 */
