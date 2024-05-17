import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";

const product = {
	id: 1,
	name: "Iphone 15",
	price: 2000,
};

const product2 = {
	id: 1,
	name: "Iphone 16",
	price: 2000,
};

// ! props = propeties
function Detail(props) {
	return (
		<div>
			<h2>{props.title}</h2>
			<h1>Product Detail</h1>
			<p>{props.data.id}</p>
			<p>{props.data.name}</p>
			<p>{props.data.price}</p>
		</div>
	);
}
function App() {
	return (
		<>
			<Header />
			<main className="container">
				{/* {Detail(product)} */}
				<Detail data={product} title="hello" />
				{/* <Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes> */}
			</main>
			<Footer />
		</>
	);
}

export default App;
