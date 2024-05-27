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
			<h1>Chi tiet san pham</h1>
			<div className="row">
				<div className="col-6">
					<img src={product.thumbnail} alt="" />
				</div>
				<div className="col-6">
					<h2>{product.title}</h2>
					<p>Price: {product.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
