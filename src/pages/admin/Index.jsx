import React from "react";

// ! props = propeties = Những thuộc tính
const Index = ({ data, username }) => {
	console.log(data);
	return (
		<>
			<h1>Hello, {username}</h1>
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
						<tr>
							<td>{product.id}</td>
							<td>{product.title}</td>
							<td>{product.price}</td>
							<td>{product.description}</td>
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
