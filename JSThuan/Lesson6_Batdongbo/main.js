function taskA() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskA done");
			resolve();
		}, 2000);
	});
}

function taskB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskB done");
			resolve();
		}, 4000);
	});
}

function taskC() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("TaskC done");
			resolve();
		}, 6000);
	});
}

// Cach 1: callback
// function runTasks() {
// 	taskA(() => {
// 		taskB(() => {
// 			taskC(() => {
// 				console.log("cac cong viec da xong het");
// 			});
// 		});
// 	});
// }

// runTasks();

// Cach 2 : Promise
// function runTasks() {
// 	taskA()
// 		.then(() => taskB())
// 		.then(() => taskC())
// 		.then(() => console.log("cac cong viec da xong het"))
// 		.catch((error) => console.error(error));
// }
// runTasks()

// Cach 3: asyns/await
async function runTasks() {
	try {
		await taskA();
		await taskB();
		await taskC();
		console.log("cac cong viec da xong het");
	} catch (error) {
		console.error(error);
	}
}

runTasks();
