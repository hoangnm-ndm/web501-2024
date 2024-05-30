import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// BTVN: validation voi zod:
// title required, tối thiểu 6 ký tự.
// price required, ko âm

const ProductAdd = ({ onProduct }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		onProduct(data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Add product</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input className="form-control" type="text" id="title" {...register("title")} />
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input className="form-control" type="number" id="price" {...register("price")} />
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea className="form-control" type="text" id="description" {...register("description")} />
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
