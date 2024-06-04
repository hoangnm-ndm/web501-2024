import { Link } from "react-router-dom";
import api from "../axios";

const Home = ({ data, removeProduct }) => {
	return (
		<>
			<h1>Hello, Admin</h1>
			<Link to="/product-add" className="btn btn-success">
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
							<td>{p.thumbnail ? <img src={p.thumbnail} alt={p.title} /> : "Updating"}</td>
							<td>{p.description}</td>
							<td>
								<button onClick={() => removeProduct(p.id)} className="btn btn-danger">
									Remove
								</button>
								<Link to={`/product-edit/${p.id}`} className="btn btn-warning">
									Update
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Home;
