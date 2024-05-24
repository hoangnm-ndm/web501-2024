import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import api from "./axios";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
	const [products, setProducts] = useState([]);
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
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}
