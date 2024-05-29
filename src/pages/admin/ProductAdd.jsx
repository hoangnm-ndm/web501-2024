import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schemaProduct = z.object({
	title: z.string().min(3),
	price: z.number().min(0),
	description: z.string(),
});
const ProductAdd = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schemaProduct),
	});
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Add product</h1>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="title">
						Title
					</label>
					<input className="form-control" type="text" id="title" {...register("title", { required: true })} />
					{errors.title?.message && <p className="text-danger">{errors.title?.message}</p>}
				</div>

				<div className="form-group mb-3">
					<label className="form-label" htmlFor="price">
						Price
					</label>
					<input className="form-control" type="number" id="price" {...register("price", { required: true })} />
					{errors.price?.message && <p className="text-danger">{errors.price?.message}</p>}
				</div>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="description">
						Description
					</label>
					<input className="form-control" type="text" id="description" {...register("price", { required: true })} />
				</div>
				<div className="form-group mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Add product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductAdd;
