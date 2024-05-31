import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import api, { getProducts } from "./axios";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

// ! BTVN : Làm chức năng xoá sản phẩm có confirm
export default function App() {
	const [products, setProducts] = useState([]);
	const nav = useNavigate();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/products");
				setProducts(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	}, []);
	const handleProductAdd = (data) => {
		(async () => {
			try {
				const result = await api.post("/products", data);
				setProducts([...products, result.data]);
				if (confirm("Them thanh cong, co muon ve dashboard admin khong?")) {
					nav("/admin");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	};
	const handleProductEdit = (data) => {
		(async () => {
			try {
				await api.patch(`/products/${data.id}`, data);
				// const newData = products.map((item) => (item.id === data.id ? data : item));
				// setProducts(newData);
				const newData = await getProducts();
				setProducts(newData);
				if (confirm("Them thanh cong, co muon ve dashboard admin khong?")) {
					nav("/admin");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	};
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage data={products} />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/product-detail/:id" element={<ProductDetail />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/admin" element={<Dashboard data={products} />} />
					<Route path="/admin/product-add" element={<ProductAdd onAdd={handleProductAdd} />} />
					<Route path="/admin/product-edit/:id" element={<ProductEdit onEdit={handleProductEdit} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}
