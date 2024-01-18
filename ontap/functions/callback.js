// function xinTienMe(callback) {
//   console.log("Bắt đầu năn nỉ mẹ!");
//   setTimeout(function () {
//     console.log("Mẹ cho tiền");
//     callback();
//   }, 3000);
// }
// function muaLapTop() {
//   console.log("Mua laptop!");
// }

// xinTienMe(muaLapTop);

/**
 * Bất đồng bộ và xử lý bất đồng bộ trong JS:
 * 1. Callback:
 * - Là một hàm được truyền vào hàm khác như một đối số.
 * 2. Promise
 * 3. Async/Await
 */

console.log("cong viec 1");
setTimeout(function () {
  console.log("cong viec 2");
}, 0);
console.log("cong viec 3");
