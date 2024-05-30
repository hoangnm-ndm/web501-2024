import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/**
 * ! BTVN:
 * 1. validation title required, it nhat 6 ky tu
 * 2. validation price required, >=0
 */

const ProductAdd = ({ onAddProduct }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		onAddProduct(data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Product Add</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title")} />
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input type="text" className="form-control" id="price" {...register("price")} />
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input type="text" className="form-control" id="description" {...register("description")} />
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary w-100">
						Add product
					</button>
				</div>
			</form>
		</>
	);
};

export default ProductAdd;
