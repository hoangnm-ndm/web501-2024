import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const products = [
	{ id: 1, name: "Product 1", price: 100 },
	{ id: 2, name: "Product 2", price: 200 },
	{ id: 3, name: "Product 3", price: 300 },
];

const products2 = [
	{ id: 1, name: "Product A", price: 100 },
	{ id: 2, name: "Product B", price: 200 },
	{ id: 3, name: "Product C", price: 300 },
];

const HomePage = (props) => {
	return (
		<>
			{props.data.map((item) => (
				<div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
					<div className="card">
						<img src={item.thumbnail} alt={item.name} />
						<div className="content">
							<h2>{item.name}</h2>
							<p>Price: {item.price}</p>
							<button className="btn btn-danger w-100">Add to card</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

// ! props = properties
function App() {
	return (
		<>
			<Header />
			<main>
				{/* {HomePage(products)} */}
				<HomePage data={products} />
				<HomePage data={products2} />
			</main>
			<Footer />
		</>
	);
}

export default App;
