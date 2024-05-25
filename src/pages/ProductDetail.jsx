import axios from "axios";
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
				console.log(error);
			}
		})();
	}, []);
	return (
		<div>
			{product.title} - {product.price} - {product.brand}
		</div>
	);
};

export default ProductDetail;
