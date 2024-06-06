import React, { useEffect, useState } from "react";
import "./App.scss";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import api from "./axios";
import Register from "./pages/Register";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const { data } = await api.get("/products");
			setProducts(data);
		})();
	}, []);

	const handleSubmit = async (data) => {
		const res = await api.post("/products", data);
		setProducts([...products, res.data]);
		if (confirm("Add succefully, redirect to home page?")) {
			navigate("/");
		}
	};

	const handleSubmitEdit = async (data) => {
		await api.patch(`/products/${data.id}`, data);
		const newData = await api.get("/products");
		setProducts(newData.data);
		if (confirm("Add succefully, redirect to home page?")) {
			navigate("/");
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
		<div>
			<header>
				<div>
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
				</div>
			</header>
			<main className="container">
				<Routes>
					<Route path="/" element={<Home data={products} removeProduct={removeProduct} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/product-add" element={<ProductAdd onAddProduct={handleSubmit} />} />
					<Route path="/product-edit/:id" element={<ProductEdit onEditProduct={handleSubmitEdit} />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
