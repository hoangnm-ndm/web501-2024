import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import api from "./axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Register from "./pages/Register";
import ProductForm from "./pages/ProductForm";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		(async () => {
			const { data } = await api.get("/products");
			setProducts(data);
		})();
	}, []);

	// const handleSubmit = async (data) => {
	// 	const res = await api.post("/products", data);
	// 	setProducts([...products, res.data]);
	// 	if (confirm("Add succefully, redirect to home page?")) {
	// 		navigate("/admin");
	// 	}
	// };

	// const handleSubmitEdit = async (data) => {
	// 	await api.patch(`/products/${data.id}`, data);
	// 	const newData = await api.get("/products");
	// 	setProducts(newData.data);
	// 	if (confirm("Add succefully, redirect to home page?")) {
	// 		navigate("/admin");
	// 	}
	// };

	const handleProduct = async (data) => {
		if (data.id) {
			// logic cho edit product
			await api.patch(`/products/${data.id}`, data);
			const newData = await api.get("/products");
			setProducts(newData.data);
		} else {
			// logic cho add product
			const res = await api.post("/products", data);
			setProducts([...products, res.data]);
		}
		if (confirm("Successfully, redirect to admin page?")) {
			navigate("/admin");
		}
	};

	const removeProduct = async (id) => {
		if (confirm("Are you sure?")) {
			await api.delete(`/products/${id}`);
			const newData = products.filter((item) => item.id !== id && item);
			setProducts(newData);
		}
	};

	const logout = () => {
		if (confirm("Are you sure?")) {
			localStorage.removeItem("user");
			navigate("/login");
		}
	};

	return (
		<div>
			<header>
				<div>
					<ul>
						<li>
							<Link to="/admin">Home</Link>
						</li>

						<li>
							<Link to="/register">Register</Link>
						</li>
						{user ? (
							<li>
								<button onClick={logout} className="btn btn-danger">
									Hello {user?.user?.email} - Logout
								</button>
							</li>
						) : (
							<li>
								<Link to="/login">Login</Link>
							</li>
						)}
					</ul>
				</div>
			</header>
			<main className="container">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Navigate to="/admin" />} />

					{/* Private route for admin */}
					<Route path="/admin" element={<PrivateRoute />}>
						<Route path="/admin" element={<Home data={products} removeProduct={removeProduct} />} />
						{/* <Route path="/admin/product-add" element={<ProductAdd onAddProduct={handleSubmit} />} />
						<Route path="/admin/product-edit/:id" element={<ProductEdit onEditProduct={handleSubmitEdit} />} /> */}
						<Route path="/admin/product-add" element={<ProductForm handleProduct={handleProduct} />} />
						<Route path="/admin/product-edit/:id" element={<ProductForm handleProduct={handleProduct} />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
