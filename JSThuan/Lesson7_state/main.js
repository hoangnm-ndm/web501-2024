const [products, setProducts] = useState([]);

function useState(initState) {
	let state = initState;
	function setState(newState) {
		state = newState;
		reRender();
	}
	return [state, setState];
}

function reRender() {
	console.log("reRender");
}
