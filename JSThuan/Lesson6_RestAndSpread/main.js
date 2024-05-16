const myStudents = ["Nghia", "Kiet", "Sung", "Quynh Anh"];
const ecma2 = ["Phat", "Chinh", "Hoang"];

// ! Copy mang
const ecma3 = [...ecma2];
console.log(ecma3);
ecma3.push("Obama");
console.log(ecma3);
console.log(ecma2);

const newClass = [...myStudents, "Trumb", ...ecma2];
console.log(newClass);

const [sv1, sv2, sv3, ...rest] = myStudents;
console.log(sv1);
console.log(rest);

const product = {
	title: "Iphone 15 pro max",
	price: 1500,
	color: "yellow",
	ram: "6gb",
	rom: "128gb",
};

const { title, price, ...others } = product;
console.log(title);
console.log(others);
// args = arguments
function sum(...args) {
	return; //
}

// sum(1,2) => 3
// sum(100, 200, 300) => 600
