function quaMon(callback) {
	setTimeout(() => {
		console.log("TaskA Done");
		callback();
	}, 6000);
}

function totNghiep(callback) {
	setTimeout(() => {
		console.log("TaskB Done");
		callback();
	}, 4000);
}

function kiemTien(callback) {
	setTimeout(() => {
		console.log("TaskC");
		callback();
	}, 2000);
}

// ! A -> B -> C
// Cach 1: Callback.

quaMon(() => {
	totNghiep(() => {
		kiemTien(() => {
			console.log("All Done");
		});
	});
});
