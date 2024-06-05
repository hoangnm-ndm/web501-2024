import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import instance from "./axios";
import Home from "./pages/Home";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			const { data } = await instance.get("/products");
			setProducts(data);
		})();
	}, []);

	const handleSubmit = async (data) => {
		const res = await instance.post("/products", data);
		setProducts([...products, res.data]);
		if (confirm("Add product success, redirect to home")) {
			navigate("/");
		}
	};
	const handleSubmitEdit = async (data) => {
		const res = await instance.patch(`/products/${data.id}`, data);
		console.log(res.data);
		const newData = await instance.get("/products");
		setProducts(newData.data);
		if (confirm("Edit product success, redirect to home")) {
			navigate("/");
		}
	};

	const handleRemove = async (id) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			const newData = products.filter((item) => item.id !== id && item);
			setProducts(newData);
		}
	};
	return (
		<>
			<header>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</header>
			<main className="container">
				<Routes>
					<Route path="/" element={<Home data={products} removeProduct={handleRemove} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/product-add" element={<ProductAdd onAdd={handleSubmit} />} />
					<Route path="/product-edit/:id" element={<ProductEdit onEdit={handleSubmitEdit} />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
