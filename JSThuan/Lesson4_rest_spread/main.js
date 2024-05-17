const myChildren = ["Dung", "Hoa", "Huan", "Mai"];

const [con1, con2, ...rest] = myChildren;
console.log(rest);

const ecma1 = ["Trien Chieu", "Obama"];

const ecma2 = ["Trump"];

const ecma3 = ["Lao Hac", "Vo Tong", "Chi Pheo"];

const newClass = ecma1.concat(ecma2).concat(ecma3);
const newClass2 = [...ecma1, ...ecma2, ...ecma3, "con trai thay"];

console.log(newClass);
console.log(newClass2);

const inforUser = {
	username: "hoangnm",
	age: 18,
};

const socialLink = {
	facebook: "https://fb.hoang.com",
};

const objSumary = { ...inforUser, ...socialLink };
console.log(objSumary);

function sum(...args) {
	let tong = 0;
	for (let i = 0; i < args.length; i++) {
		tong = tong + args[i];
	}
	return tong;
}

function sum2(...args) {
	let tong = 0;
	for (value of args) {
		tong = tong + value;
	}
	return tong;
}

function sum3(...arr) {
	return arr.reduce((a, b) => a + b, 0);
}

console.log(sum3(1, 2, 3, 100));
