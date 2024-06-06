import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import * as z from "zod";
import api from "../axios";

const productSchema = z.object({
	title: z.string().min(6, { message: "Toi thieu 6 ky tu" }),
	price: z.number().min(0),
	description: z.string().optional(),
});

const ProductForm = ({ handleProduct }) => {
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(productSchema),
	});
	if (id) {
		useEffect(() => {
			(async () => {
				const { data } = await api.get(`/products/${id}`);
				reset(data);
			})();
		}, []);
	}
	return (
		<>
			<form onSubmit={handleSubmit((data) => handleProduct({ ...data, id }))}>
				<h1>{id ? "Edit" : "Add"} product</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title")} />
					{errors.title && <p className="text-danger">{errors.title.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						id="price"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price && <p className="text-danger">{errors.price.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input type="text" className="form-control" id="description" {...register("description")} />
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary w-100">
						{id ? "Edit" : "Add"} product
					</button>
				</div>
			</form>
		</>
	);
};

export default ProductForm;
