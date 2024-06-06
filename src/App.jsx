import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import api from "./axios";
import Home from "./pages/Home";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

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
					navigate("/");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	const hanldeSubmitEdit = (data) => {
		(async () => {
			try {
				await api.patch(`/products/${data.id}`, data);
				const newData = await api.get("/products");
				setProducts(newData.data);
				if (confirm("Submit successfully, redirect to admin page?")) {
					navigate("/");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	const removeProduct = (id) => {
		(async () => {
			try {
				if (confirm("Are you sure?")) {
					await api.delete(`/products/${id}`);
					// Cach 1:
					// const newData = products.filter((item) => item.id !== id && item);
					// setProducts(newData);

					// Cach 2:
					const newData = await api.get(`/products`);
					setProducts(newData.data);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	return (
		<>
			<header>
				<ul>
					<li>
						<Link to="/admin">Home</Link>
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
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />

					<Route path="/admin" element={<PrivateRoute />}>
						<Route path="/admin" element={<Home data={products} removeProduct={removeProduct} />} />
						<Route path="/admin/product-add" element={<ProductAdd onProduct={hanldeSubmit} />} />
						<Route path="/admin/product-edit/:id" element={<ProductEdit onProduct={hanldeSubmitEdit} />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
