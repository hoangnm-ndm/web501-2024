function sum() {
  return "hello";
}

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

/**
 * 1. Regular function (named function)
 * 2. Anonymous function (Expression function, Arrow function)
 * 3. Callback
 * 4. IIFE (Immediately Invoked Function Expression)
 *
 */

// Expression function
const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(2, 3));

// Arrow function
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;
const returnObject = () => ({
  name: "Hoang",
  age: 18,
});

const returnArray = () => [1, 2, 3];

console.log(sum3(10, 20));
console.log(sum4(20, 30));
console.log(returnObject());
console.log(returnArray());

const muaMayTinh = (viec1) => {
  viec1();
  console.log("mua may tinh");
};

const xinTienMe = () => {
  setTimeout(() => {
    console.log("Xin dk tien");
  }, 3000);
};

const diLamKiemTien = () => {
  setTimeout(() => {
    console.log("Dk luong");
  }, 5000);
};
muaMayTinh(diLamKiemTien);

(function (a, b) {
  console.log(a + b);
})(100, 200);
