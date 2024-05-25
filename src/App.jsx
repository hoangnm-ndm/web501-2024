import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((response) => response.json())
			.then(({ products }) => {
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// ! props = propeties = cac thuoc tinh = {}

	return (
		<div>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home data={products} name="hoang" class="WD18410" />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
