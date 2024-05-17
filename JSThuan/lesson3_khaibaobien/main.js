function hello() {
	let name = "hoang";
	console.log(name);
}

hello();

// console.log(name);

if (3 > 2) {
	let myNumber = 3;
	console.log(myNumber);
}

// console.log(myNumber);

let schools = "FPT";
schools = "FPOLY";
console.log(schools);
const address = "HN";
// address = "Nghe An";

const myStudents = ["Linh", "Bac"];
myStudents.push("Trumb");
console.log(myStudents);

// myStudents = ["hoang"];

const myInfor = Object.freeze({
	email: "hoangnm@gmail.com",
});

const myInfor2 = {
	email: "hoangnm@gmail.com",
};
myInfor2.email = "a@gmail";

console.log(myInfor);
