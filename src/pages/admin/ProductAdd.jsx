import React from "react";

const ProductAdd = () => {
	return (
		<div>
			<form>
				<h1>Add product</h1>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="title">
						Title
					</label>
					<input className="form-control" type="text" id="title" />
				</div>

				<div className="form-group mb-3">
					<label className="form-label" htmlFor="price">
						Price
					</label>
					<input className="form-control" type="text" id="price" />
				</div>
				<div className="form-group mb-3">
					<label className="form-label" htmlFor="description">
						Description
					</label>
					<input className="form-control" type="text" id="description" />
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
