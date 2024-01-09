// Buổi 3 chưa demo khai báo biến.
/**
 * var = variant
 * 1. var cho phép khai báo lại
 * 2. var cho phép gán lại
 * 3. Phạm vi hoạt động là global-scope (toàn cục)
 * 4. Có hỗ trợ hoisting
 */

{
  {
    {
      var apple = "táo xanh";
      var apple = "táo đỏ";
    }
  }
}
// apple = "táo hỏng";
console.log(apple);
console.log(`chào bạn ${myName}`);
var myName = "hoàng"; // -> var myName; myName = "hoàng"
// "strict mode"

/**
 * let:
 * 1. Không thể khai báo lại
 * 2. Có thể gán lại
 * 3. Phạm vi sử dụng function-scope, block-scope
 * 4. let không hỗ trợ hoisting
 */

if (true) {
  let quoctich = "VN";
  console.log(quoctich);
}

function sum(a, b) {
  a = 10;
  return a + b;
}

// console.log(a);

// console.log(quoctich);
// console.log(school);
// let school = "FPOLY";

/**
 * let:
 * 1. Không thể khai báo lại
 * 2. Không thể gán lại (với các kiểu dữ liệu tham chiếu, có thể thay đổi dữ liệu bằng phương thức).
 * 3. Phạm vi sử dụng function-scope, block-scope
 * 4. let không hỗ trợ hoisting
 */

const myStudents = ["Vuong chieu", "Ma han", "Coco"];
myStudents.push("Duong Qua");
console.log(myStudents);
