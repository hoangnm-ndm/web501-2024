/**
 * ! Asynchronous
 */

function xinTien(callback) {
	setTimeout(() => {
		console.log("Xin dk tien");
		callback();
	}, 5000);
}
function muaXe(callback) {
	setTimeout(() => {
		console.log("Mua xe may");
		callback();
	}, 1500);
}

function diHoc() {
	setTimeout(() => {
		console.log("Di hoc");
	}, 3000);
}

// muaXe(xinTien);
xinTien(() => {
	muaXe(() => {
		diHoc();
	});
});
