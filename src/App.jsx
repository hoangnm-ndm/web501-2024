import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import api from "./axios";
import ProductAdd from "./pages/admin/ProductAdd";

// ! props = properties
function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/products");
				console.log(data);
				// http://localhost:3000/products
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	const hanldeSubmit = (data) => {
		(async () => {
			try {
				const res = await api.post("/products", data);
				console.log(res.data);
				setProducts([...products, res.data]);
				if (confirm("Submit successfully, redirect to admin page?")) {
					navigate("/admin");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home data={products} />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/product-detail/:id" element={<ProductDetail />} />
					<Route path="/admin" element={<Dashboard data={products} />} />
					<Route path="/admin/product-add" element={<ProductAdd onProduct={hanldeSubmit} />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
