import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as z from "zod";
import api from "../axios";

const schemaProduct = z.object({
	title: z.string().min(3, { message: "Tên phải có ít nhất 3 ký tự" }),
	price: z.number().min(1, { message: "Giá phải lớn hơn 0" }),
	description: z.string().optional(),
});

const ProductEdit = ({ onEdit }) => {
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schemaProduct),
	});
	useEffect(() => {
		(async () => {
			const { data } = await api.get(`/products/${id}`);
			reset(data);
		})();
	}, []);
	const onSubmit = (data) => {
		onEdit({ ...data, id });
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Edit product</h1>
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
						Edit product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductEdit;
