const teamLayKinh = ["Duong Tang", "Ngo Khong", "Bat Gioi", "Sa Tang", "Ngua Bach Long"];

const [so1, so2, ...rest] = teamLayKinh;

const ecma1 = ["Dung", "Linh", "Diep"];
const ecma2 = ["Nhung", "Hoa"];
const ecma3 = ["An", "Nhien"];

// const ecma = ecma1.concat(ecma2).concat(ecma3).concat("Hoang");

const ecma = [...ecma1, ...ecma2, ...ecma3];

const ecma4 = ecma3; // Cach copy mang sai
const ecma5 = [...ecma3]; // cach copy mang dung
ecma4.push("Obama");
console.log({ ecma4 });
console.log({ ecma3 });

console.log(ecma);

const teamLayKinh2 = {
	suPhu: "DuongTang",
	detu1: "NgoKhong",
};
const teamMoi = {
	...teamLayKinh2,
	detu1: "BatGioi",
};

console.log(teamMoi);
