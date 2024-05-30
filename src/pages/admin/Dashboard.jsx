import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
	return (
		<>
			<h1>Hello, Admin</h1>
			<Link to="/admin/product-add" className="btn btn-success">
				Add new product
			</Link>
			<table className="table table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Thumbnail</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((p) => (
						<tr key={p.id}>
							<td>{p.id}</td>
							<td>{p.title}</td>
							<td>{p.price}</td>
							<td>
								<img src={p.thumbnail} alt={p.title} />
							</td>
							<td>{p.description}</td>
							<td>
								<button className="btn btn-danger">Remove</button>
								<button className="btn btn-warning">Update</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Dashboard;
