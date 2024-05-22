import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/products");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();

		// TODO: Cài đặt và sử dụng axios instance để fetch lại dữ liệu (22/5/2024)
	}, []);
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage data={products} />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}
