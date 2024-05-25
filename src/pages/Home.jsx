import { Link } from "react-router-dom";

const Home = ({ data }) => {
	console.log(data);
	return (
		<>
			<div className="row">
				{data.map((p) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
						<div className="card">
							<Link to={`/product-detail/${p.id}`}>
								<img src={p.thumbnail} alt="" />
							</Link>
							<div className="content">
								<Link to={`/product-detail/${p.id}`}>
									<h2>{p.title}</h2>
								</Link>
								<p>Price: {p.price}</p>
								<p>Brand: {p.brand}</p>
								<button className="btn btn-danger w-100">Add to card</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
