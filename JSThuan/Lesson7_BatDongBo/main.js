/**
 * ! Asynchronous
 */

// function xinTien(callback) {
// 	setTimeout(() => {
// 		console.log("Xin dk tien");
// 		callback();
// 	}, 5000);
// }
// function muaXe(callback) {
// 	setTimeout(() => {
// 		console.log("Mua xe may");
// 		callback();
// 	}, 1500);
// }

// function diHoc() {
// 	setTimeout(() => {
// 		console.log("Di hoc");
// 	}, 3000);
// }

// muaXe(xinTien);
// xinTien(() => {
// 	muaXe(() => {
// 		diHoc();
// 	});
// });

fetch("https://dummyjson.com/products")
	.then((response) => response.json())
	.then(({ products }) => {
		console.log(products);
		sanpham = products;
	})
	.catch((error) => console.log(error));

// TODO: Sau khi lay dk danh sach san pham thi tim cach hien thi ra ngoai html
