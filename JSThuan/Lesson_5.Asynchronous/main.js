function taskA() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Tác vụ A đã hoàn thành");
			resolve();
		}, 2000);
	});
}

function taskB() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Tác vụ B đã hoàn thành");
			resolve();
		}, 3000);
	});
}

function taskC() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Tác vụ C đã hoàn thành");
			resolve();
		}, 5000);
	});
}

/**
 * 3 cach giai quyet bat dong bo?:
 * 1. Callback
 * 2. Promise
 * 3. Async/await
 */

// 1. Callback
taskA(() =>
	taskB(() =>
		taskC(() => {
			console.log("Cac task da xong het!");
		})
	)
);

// 2. Promise
// taskA()
// 	.then(() => taskB())
// 	.then(() => taskC())
// 	.then(() => {
// 		console.log("Tất cả các tác vụ đã hoàn thành");
// 	})
// 	.catch((error) => {
// 		console.error("Đã xảy ra lỗi:", error);
// 	});

// 2. Promise
// console.time("tinhtoanthoigian");
// Promise.all([taskA(), taskB(), taskC()])
// 	.then(() => {
// 		console.timeEnd("tinhtoanthoigian");
// 	})
// 	.catch((error) => {
// 		console.error("Đã xảy ra lỗi:", error);
// 	});

// 3. Async/await
async function taskCommon() {
	try {
		await taskA();
		await taskB();
		await taskC();
		console.log("Tat ca cong viec da xong!");
	} catch (error) {
		console.log("Error: ", error);
	}
}

taskCommon();
