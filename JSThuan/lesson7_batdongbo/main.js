function taskA() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("taskA done");
			resolve();
		}, 6000);
	});
}

function taskB() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("taskB done");
			resolve();
		}, 4000);
	});
}

function taskC() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("taskC");
			resolve();
		}, 2000);
	});
}

// Cach 1: promise chaining
taskA()
	.then(() => taskB())
	.then(() => taskC())
	.then(() => {
		console.log("toi da lam xong het!");
	})
	.catch((err) => {
		console.log(err);
	});

// Cach 2: async/await
async function taskJob() {
	try {
		await taskA();
		await taskB();
		await taskC();
		console.log("toi da lam xong het!");
	} catch (err) {
		console.log(err);
	}
}

taskJob();
