function taskA(callback) {
	setTimeout(() => {
		console.log("TaskA done");
		callback();
	}, 2000);
}
function taskB(callback) {
	setTimeout(() => {
		console.log("TaskB done");
		callback();
	}, 4000);
}
function taskC(callback) {
	setTimeout(() => {
		console.log("TaskC done");
		callback();
	}, 6000);
}

// A -> B -> C
taskA(() => {
	taskB(() => {
		taskC(() => {
			console.log("cac cong viec da xong het");
		});
	});
});

//! callback
