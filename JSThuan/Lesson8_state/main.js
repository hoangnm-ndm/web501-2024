function useState(initState) {
	let state = initState;
	function setState(newState) {
		state = newState;
		reRender();
	}
	return [state, setState];
}
function reRender() {
	console.log("Render");
}

const [products, setProducts] = useState(0);
