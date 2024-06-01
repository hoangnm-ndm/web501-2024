import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
	// Hien thi danh sach san pham dang table
	return (
		<div>
			<h1>Hello, Admin</h1>
			<Link className="btn btn-success" to="/admin/product-add">
				Add new product
			</Link>
			{data.length > 0 ? (
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
								<td>{item.description || "Updating"}</td>
								<td>{item.thumbnail ? <img src={item.thumbnail} alt="" width={100} /> : "Updating"}</td>
								<td>
									<Link to={`/admin/product-edit/${item.id}`} className="btn btn-warning">
										Edit
									</Link>
									<button className="btn btn-danger">Remove</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				"Khong co san pham nao"
			)}
		</div>
	);
};

export default Dashboard;
