import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
	// Hien thi danh sach san pham dang table
	return (
		<div>
			<h1>Hello, Admin</h1>
			<Link className="btn btn-success" to="/admin/product-add">
				Add new product
			</Link>
			<table className="table-bordered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<img src={item.thumbnail} alt="" width={100} />
							</td>
							<td>
								<button className="btn btn-warning">Edit</button>
								<button className="btn btn-danger">Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
