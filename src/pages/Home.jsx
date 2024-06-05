import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, removeProduct }) => {
	return (
		<div>
			<Link className="btn btn-primary" to="/product-add">
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
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<Link to={`product-edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>
								<button onClick={() => removeProduct(item.id)} className="btn btn-danger">
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
