import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get(`/products/${id}`);
				setProduct(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	}, []);
	return (
		<div>
			<h1>{product.title}</h1>
		</div>
	);
};

export default ProductDetail;
