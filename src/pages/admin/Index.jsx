import React from "react";
import { Link } from "react-router-dom";

// ! props = propeties = Những thuộc tính
const Index = ({ data, username }) => {
	console.log(data);
	return (
		<>
			<h1>Hello, {username}</h1>
			<Link to="/admin/product-add" className="btn btn-primary">
				Add new product
			</Link>
			<table className="table table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.title}</td>
							<td>{product.price}</td>
							<td>{product.description ? product.description : "Updating"}</td>
							<td>
								<button className="btn btn-warning">Edit</button>
								<button className="btn btn-danger">Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Index;
