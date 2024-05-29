import React from "react";
import { useForm } from "react-hook-form";

const ProductAdd = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Product Add Form</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title", { required: true })} />
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						price
					</label>
					<input type="number" className="form-control" id="price" {...register("price")} />
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
