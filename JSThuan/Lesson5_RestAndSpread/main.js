const FE = ["My", "Nhung", "Trang"];
const FE2 = FE; // Copy mang sai cách
FE2.push("Obama");
console.log(FE2);
console.log(FE);
const FE3 = [...FE];

FE2.push("Trumb");
console.log(FE3);
console.log(FE);

const BE = ["Chien", "Hoan", "Ha", "Dung"];
// const nhomDoAn = FE.concat(BE);

const nhomDoAn = [...FE, ...BE, "Hoang"];
console.log(nhomDoAn);

const user = {
	email: "hoang@gmail.com",
	password: "12323nvbsds",
	address: "HN",
};

// user.password = "mnsdmnsmds";
// user.address = "Hai Phong";

const newUser = {
	...user,
	address: "Hai Phong",
	nickname: "thayhoangjssieucapvippro",
	age: 18,
};
newUser;
