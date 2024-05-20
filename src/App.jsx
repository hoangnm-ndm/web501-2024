import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
	},
];
// ! Props = properties

export default function App() {
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
