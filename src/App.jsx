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
import api, { getProducts } from "./axios";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/products");
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

	const hanldeSubmitEdit = (data) => {
		(async () => {
			try {
				const res = await api.patch(`/products/${data.id}`, data);
				const newData = await getProducts();
				setProducts(newData);
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
					<Route path="/admin/product-edit/:id" element={<ProductEdit onProduct={hanldeSubmitEdit} />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
