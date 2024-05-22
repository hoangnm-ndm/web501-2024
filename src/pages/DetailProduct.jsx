import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const DetailProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get(`/products/${id}`);
				// console.log(data);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src={product.thumbnail} alt="" />
				</div>
				<div className="col-6">
					<h1>{product.title}</h1>
					<p>Gia: {product.price}</p>
					<p>{product.description}</p>
					<button className="btn btn-primary w-100">Mua ngay</button>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
