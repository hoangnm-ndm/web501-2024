const useState = (initialState) => {
	let state = initialState;
	function setState(newState) {
		return (state = newState);
		reRender();
	}
	return [state, setState];
};

function reRender() {
	// render lại component khi thấy state bị thay đổi.
}

const [products, setProducts] = useState([]);
