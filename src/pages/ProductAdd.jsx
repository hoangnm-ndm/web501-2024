import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const productSchema = z.object({
	title: z.string().min(6, { message: "Ten san pham phai co it nhat 6 ky tu" }),
	price: z.number().min(0, { message: "Phai lon hon 0" }),
	description: z.string().optional(),
});

const ProductAdd = ({ onAdd }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(productSchema),
	});
	return (
		<div>
			<form onSubmit={handleSubmit((data) => onAdd(data))}>
				<h1>Product Form</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title", { required: true })} />
					{errors.title && <p className="text-danger">{errors.title.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						price
					</label>
					<input type="number" className="form-control" id="price" {...register("price", { valueAsNumber: true })} />
					{errors.price && <p className="text-danger">{errors.price.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						description
					</label>
					<input type="text" className="form-control" id="description" {...register("description")} />
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductAdd;
