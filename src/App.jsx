import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Login from "./pages/Login";
import api from "./axios";

export default function App() {
	const [products, setProducts] = useState([]);
	const nav = useNavigate();
	useEffect(() => {
		(async () => {
			const { data } = await api.get("/products");
			setProducts(data);
		})();
	}, []);
	const handleProductAdd = async (data) => {
		const result = await api.post("/products", data);
		setProducts([...products, result.data]);
		if (confirm("successfully, redirect to home?")) {
			nav("/");
		}
	};
	const handleProductEdit = async (data) => {
		await api.patch(`/products/${data.id}`, data);
		const newData = await api.get("/products");
		setProducts(newData.data);
		if (confirm("successfully, redirect to home?")) {
			nav("/");
		}
	};
	const removeProduct = async (id) => {
		if (confirm("Are you sure?")) {
			await api.delete(`/products/${id}`);
			const newData = products.filter((item) => item.id !== id && item);
			setProducts(newData);
		}
	};
	return (
		<>
			<header>
				{/* <h1>{email ? `Hello, ${email}` : "Ban chua dang nhap"}</h1> */}
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
				</ul>
			</header>
			<main className="container">
				<Routes>
					<Route path="/" element={<Home data={products} removeProduct={removeProduct} />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/product-add" element={<ProductAdd onAdd={handleProductAdd} />} />
					<Route path="/product-edit/:id" element={<ProductEdit onEdit={handleProductEdit} />} />
				</Routes>
			</main>
		</>
	);
}
