import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// ! props = properties
function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function fetchAPI() {
			try {
				const res = await fetch("http://localhost:3000/products");
				const data = await res.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchAPI();
	}, []);

	return (
		<>
			<Header />
			<main className="container">
				<Home data={products} />
			</main>
			<Footer />
		</>
	);
}

export default App;
