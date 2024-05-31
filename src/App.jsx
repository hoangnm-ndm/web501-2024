import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { useEffect, useState } from "react";
import instance, { getProducts } from "./axios";
import DetailProduct from "./pages/DetailProduct";
import Index from "./pages/admin/Index";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get("/products");
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = (data) => {
		(async () => {
			try {
				const res = await instance.post("/products", data);
				setProducts([...products, res.data]);
				if (confirm("Add product success, redirect to admin")) {
					navigate("/admin");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	const handleSubmitEdit = (data) => {
		(async () => {
			try {
				const res = await instance.patch(`/products/${data.id}`, data);
				console.log(res.data);
				const newData = await getProducts();
				setProducts(newData);
				if (confirm("Edit product success, redirect to admin")) {
					navigate("/admin");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	const handleRemove = (data) => {
		// ! BTVN: Code logic xoá sản phẩm có confirm vào đây.
		// ! Xoá xong cập nhật lại danh sách sản phẩm.
		console.log(data);
	};
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage products={products} />} />
					<Route path="/product-detail/:id" element={<DetailProduct />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/admin" element={<Index data={products} removeProduct={handleRemove} />} />
					<Route path="/admin/product-add" element={<ProductAdd onAdd={handleSubmit} />} />
					<Route path="/admin/product-edit/:id" element={<ProductEdit onEdit={handleSubmitEdit} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
