/**
 * Các loại function:
 * 1. Regular function (function khai báo tường minh với từ khóa "function")
 * 2. Anonymous function (hàm ẩn danh)
 */

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10));

// ! 1. Expression function (tên hàm nằm ngoài lệnh khai báo hàm)
const tinhTong = function (a, b) {
  return a + b;
};

console.log(tinhTong(10, 20));

// ! 2. Arrow function (hàm mũi tên)

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

const showInfor = () => ({
  name: "iphone 15",
  price: 1000,
});

console.log(sum2(100, 200));
console.log(showInfor());

// TODO: viết hàm mũi tên tính tổng các số chẵn từ a đến nhỏ hơn hoặc bằng b, biết rằng a < b

const tinhTong2 = (a, b) => {
  //  CODE CUA SINH VIEN
  return;
};

// 5 -> 10: 6 + 8 + 10 = 24
