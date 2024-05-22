function taskA(callback) {
	setTimeout(() => {
		console.log("taskA done");
		callback();
	}, 6000);
}

function taskB(callback) {
	setTimeout(() => {
		console.log("taskB done");
		callback();
	}, 4000);
}

function taskC(callback) {
	setTimeout(() => {
		console.log("taskC");
		callback();
	}, 2000);
}

taskA(() => {
	taskB(() => {
		taskC(() => {
			console.log("toi da lam xong het!");
		});
	});
});
