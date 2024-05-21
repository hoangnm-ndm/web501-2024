/**
 * Các loại function:
 * 1. Regular function
 * 2. Anonymous function ()
 */

// ! Regular function (named function)
function tinhTong(a, b) {
  return a + b;
}

// ! Quy ước đặt tên camelCase

// ! Anonymous function
// ! Expression function
const sum1 = function (a, b) {
  return a + b;
};

// ! Arrow function (hàm mũi tên)
const sum2 = (a, b) => {
  // nhieu logic
  return a + b;
};
// ! Hàm mũi tên nhưng là cú pháp rút gọn
const sum3 = (a, b) => a + b;

// ! Hàm mũi tên nhưng return ra array hoặc object thì cần bọc kết quả bằng dấu ()
const showInfor = () => ({
  name: "hoang",
  major: "dev",
});

console.log(sum1(2, 3));
console.log(sum2(20, 30));
console.log(showInfor());

// TODO: Viết hàm tinhTongNSo nhập vào n, và trả về tổng các số nguyên từ 1 đến n.

const tinhTongNSo = (n) => {
  if (typeof n !== "number" || n <= 0) {
    console.log("n khong hop le");
    return;
  }
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count += i;
    }
  }
  return count;
};
console.log(tinhTongNSo(5));

// ! IIFE là hàm thực hiện ngay khi khai báo
// ! ( khaibaoham)(thamso can truyen neu co)
(() => console.log("hello"))();