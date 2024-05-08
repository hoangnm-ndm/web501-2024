// function sum(a, b) {
//   return a + b;
// }

function binhPhuong(a) {
  return a * a;
}

// ! Named function: function có tên tường minh (regular funcition)
function loiChao(name, gioitinh) {
  if (gioitinh === "nam") {
    console.log(`xin chao quy ong ${name}`);
  } else {
    console.log(`xin chao quy co ${name}`);
  }
}

// ! Anonymous function:
// ! Arrow function:
const sum1 = (a, b) => {
  return a + b;
};

// ? Arrow function với cú pháp viết tắt
const sum2 = (a, b) => a + b;

// ? Arrrow function muốn trả về 1 object
const checkUser = () => ({
  name: "Hoang",
  address: "BG",
});

const tinhToanA = () => () => () => {};

console.log(sum1(2, 3));
console.log(sum2(10, 20));
console.log(checkUser());

// ! Expression function
const sum3 = function (a, b) {
  return a + b;
};
