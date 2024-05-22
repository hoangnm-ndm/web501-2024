import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { useEffect, useState } from "react";
import instance from "./axios";

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get("/products");
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
		// IIFE = Invoke Immediately Function Expression (là hàm được gọi ngay lập tức sau khi khai báo)
	}, []);
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage products={products} />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
