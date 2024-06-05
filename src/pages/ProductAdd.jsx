import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schemaProduct = z.object({
	title: z.string().min(3, { message: "Tên phải có ít nhất 3 ký tự" }),
	price: z.number().min(1, { message: "Giá phải lớn hơn 0" }),
	description: z.string().optional(),
});

const ProductAdd = ({ onAdd }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schemaProduct),
	});
	return (
		<div>
			<form onSubmit={handleSubmit(onAdd)}>
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
					<input className="form-control" type="number" id="price" {...register("price", { valueAsNumber: true })} />
					{errors.price?.message && <p className="text-danger">{errors.price?.message}</p>}
				</div>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="description">
						Description
					</label>
					<input className="form-control" type="text" id="description" {...register("description")} />
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
