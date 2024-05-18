const nhomDoAn = ["My", "Nhung", "Trang"];

// const thanhvien1 = nhomDoAn[0];
// const thanhvien2 = nhomDoAn[1];
// const thanhvien3 = nhomDoAn[2];

const [thanhvien1, thanhvien2, thanhvien3, thanhvien4] = nhomDoAn;
console.log(thanhvien4);

const product = {
	id: 1,
	name: "Iphone 15",
	price: 1500,
	discount: 0.8,
	color: "yellow",
};

// const name = product.name;
// const price = product.price;
// const id = product.id;

const { id, name, ...rest } = product;
console.log(name);
console.log(rest);

function sum(...rest) {
	let tong = 0;
	for (value of rest) {
		tong += value;
	}
	return tong;
}
console.log(sum(1, 2, 3, 5));
// sum(1,2) => 3
// sum(100, 200, 300) => 600
