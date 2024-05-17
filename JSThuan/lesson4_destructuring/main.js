const myInfor = {
	email: "hoang@gmail.com",
	nickname: "hoangjs",
	age: 18,
};

// const email = myInfor.email;
// const nickname = myInfor.nickname;
// const age = myInfor.age;

const { email, nickname } = myInfor;
console.log(email);

const teamLayKinh = ["Duong Tang", "Ngo Khong", "Bat Gioi", "Sa Tang", "Ngua Bach Long"];

const [so1, so2, ...phanConLai] = teamLayKinh;

console.log(phanConLai);
// TODO: Viết hàm sum nhận vào số lượng tham số bất kỳ, trả về tổng của các số điền vào.

function sum(...thamso) {
	let tong = 0;
	for (value of thamso) {
		tong += value;
	}
	return tong;
}

function sum2(...thamso) {
	let tong = 0;
	for (let i = 0; i < thamso.length; i++) {
		tong += thamso[i];
	}
	return tong;
}

function sum3(...thamso) {
	return thamso.reduce((a, b) => a + b, 0);
}
console.log(sum3(1, 2, 3));

// sum(1,2,3) => 6
// sum(100, 200) => 300
