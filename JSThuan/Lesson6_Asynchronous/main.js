function taskA() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskA Done");
			resolve();
		}, 6000);
	});
}

function taskB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskB Done");
			resolve();
		}, 4000);
	});
}

function taskC() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskC");
			resolve();
		}, 2000);
	});
}

// Cach 1: Callback
// taskA(() => {
// 	taskB(() => {
// 		taskC(() => {
// 			console.log("All Done");
// 		});
// 	});
// });

// ! A -> B -> C
// Cach 2: Promise.

// taskA()
// 	.then(() => taskB())
// 	.then(() => taskC())
// 	.then(() => {
// 		console.log("All Done");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

console.time("tinhGio");
Promise.all([taskA(), taskB(), taskC()])
	.then(() => {
		console.log("All Done");
		console.timeEnd("tinhGio");
	})
	.catch((error) => {
		console.log(error);
	});

// Cach 3: Async/Await
// async function runTask() {
// 	try {
// 		await taskA();
// 		await taskB();
// 		await taskC();
// 		console.timeEnd("tinhGio");
// 		console.log("Xong het!");
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// console.time("tinhGio");
// runTask();
