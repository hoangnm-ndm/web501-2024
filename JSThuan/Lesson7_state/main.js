const useState = (initState) => {
	const a = initState;
	function setA(newState) {
		a = newState;
	}
	reRender();
	return [a, setA];
};

function reRender() {
	// Re-render the component
}
const [products, setProducts] = useState([]);
