// named function (regular function)
function doiTien(usd) {
  var tygia = 25000;
  return tygia * usd;
}

// Anonymous function (hàm ẩn danh - vô danh)
setTimeout(function () {
  console.log("hello moi nguoi!");
}, 5000);

// Epression function (function được gán cho 1 biến)
const loiChao = function () {
  console.log("hello moi nguoi!");
};

// Arrow function (hàm mũi tên)
const sum = (a, b) => a + b;

const sum2 = (a, b) => {
  return a + b;
};

const returnObj = () => ({
  name: "hoang",
  age: 32,
});
// Hàm mũi tên khi có duy nhất 1 câu lệnh sẽ được lược bỏ dấu {}
// Có thể bỏ luôn từ khoá 'return'
// Khi cần trả về một object, có thể dùng dấu ()

setTimeout(() => console.log("Thầy rất chào các bạn!"), 5000);
