/**
 * ? Có 2 loại function chính:
 * ! 1. Function có tên tường minh (regular function - named function)
 * ! 2. Function ẩn danh (anonymous function)
 */

function sum1(a, b = 10) {
	// console.log(a + b)
	return a + b;
}

console.log(sum1(2, 3));

// ! Hàm ẩn danh
// ! Expression function
const sum2 = function () {
	return a + b;
};

// ! Arrow function (ES6)
const sum3 = (a, b) => {
	return a + b;
};

// ! Hàm mũi tên viết gọn (khi có 1 câu lệnh duy nhất thì có thể bỏ qua dấu bao đóng của hàm {})
const sum4 = (a, b) => a + b;

// ! Khi muốn trả về object hoặc array mà bỏ qua return thì cần bao đóng bằng dấu ()
const showInfor = () => ({
	name: "chu cuoi",
	address: "moon",
});
console.log(sum3(10, 20));
console.log(sum4(20, 30));
console.log(showInfor());

// TODO: Viết 1 arrow function nhập vào số nguyên dương n, in ra mảng tất cả các số lẻ từ 1 đến n.

const timSoLe = (n) => {
	if (typeof n !== "number" || n <= 0) {
		console.log("n khong hop le!");
		return;
	}
	const result = [];
	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			result.push(i);
		}
	}
	console.log(`Ket qua cua phep tinh la: `, result);
};

timSoLe(100);
