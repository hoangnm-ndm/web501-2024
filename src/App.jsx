import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";

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
				<Routes>
					<Route path="/" element={<Home data={products} />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
