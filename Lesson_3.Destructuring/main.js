// ! Destructuring

const myInfor = {
	username: "hoangnm",
	email: "hoang@gmail.com",
	address: "HN",
	age: 18,
};

// const username = myInfor.username;
// const email = myInfor.email;
// const address = myInfor.address;
// const age = myInfor.age;

const { username, email, linkFacebook } = myInfor;
console.log(linkFacebook);

const teamLayKinh = ["Su phu", "Ngo khong", "bat gioi", "Sa tang", "Ngua Bach Long"];

// const so1 = teamLayKinh[0];
// const so2 = teamLayKinh[1];
// const so3 = teamLayKinh[2];

const [so1, so2, so3] = teamLayKinh;
console.log(so1);
