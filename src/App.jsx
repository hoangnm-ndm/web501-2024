import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((err) => console.log(err));
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
