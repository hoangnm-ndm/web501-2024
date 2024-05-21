import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// ! props = properties
function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {}, []);

	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</>
	);
}

export default App;
