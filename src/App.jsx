import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
