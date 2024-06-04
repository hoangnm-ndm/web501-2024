import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import api from "../axios";

const productSchema = z.object({
	title: z.string().min(6, { message: "Toi thieu 6 ky tu" }),
	price: z.number().min(0, { message: "Gia k dk nho hon 0" }),
	description: z.string().optional(),
});
const ProductEdit = ({ onProduct }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(productSchema),
	});
	const { id } = useParams();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get(`/products/${id}`);
				reset(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const onSubmit = (data) => {
		onProduct({ ...data, id });
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Edit product</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input className="form-control" type="text" id="title" {...register("title")} />
					{errors.title && <p className="text-danger">{errors.title.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input className="form-control" type="number" id="price" {...register("price", { valueAsNumber: true })} />
					{errors.price && <p className="text-danger">{errors.price.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea className="form-control" type="text" id="description" {...register("description")} />
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary w-100">
						Edit product
					</button>
				</div>
			</form>
		</>
	);
};

export default ProductEdit;
