import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const [products, setProducts] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((response) => response.json())
			.then(({ products }) => {
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	function handleShow() {
		setShow(!show);
	}
	return (
		<div>
			<Header />
			<main className="container">
				<button className="btn btn-primary" onClick={handleShow}>
					{show ? "Hide" : "Show"}
				</button>
				<div className="row">
					{show &&
						products.map((item) => (
							<div className="col-12 col-sm-6 col-md-4 col-lg-3 item" key={item.id}>
								<div>
									<img src={item.thumbnail} alt={item.title} />
								</div>
								<div className="content">
									<h2>{item.title}</h2>
									<p>Gia: {item.price}</p>
									<button className="btn btn-danger">Xem chi tiet</button>
								</div>
							</div>
						))}
				</div>

				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes> */}
			</main>
			<Footer />
		</div>
	);
}

export default App;
