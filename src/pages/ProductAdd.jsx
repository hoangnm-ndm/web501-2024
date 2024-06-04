import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const productSchema = z.object({
	title: z.string().min(6, { message: "Toi thieu 6 ky tu" }),
	price: z.number().min(0),
	description: z.string().optional(),
});
const ProductAdd = ({ onAddProduct }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(productSchema),
	});
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
						Add product
					</button>
				</div>
			</form>
		</>
	);
};

export default ProductAdd;
