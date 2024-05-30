import React from "react";

const ProductAdd = () => {
	return (
		<>
			<form onSubmit={() => console.log("add product xong")}>
				<h1>Add product</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input className="form-control" type="text" id="title" />
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input className="form-control" type="number" id="price" />
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea className="form-control" type="text" id="description" />
				</div>
				<div className="mb-3">
					<button className="btn btn-primary w-100">Add product</button>
				</div>
			</form>
		</>
	);
};

export default ProductAdd;
