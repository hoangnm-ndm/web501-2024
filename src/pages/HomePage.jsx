import React from "react";
import { Link } from "react-router-dom";

function HomePage({ products }) {
	return (
		<>
			<h1>San pham ban chay</h1>
			<div className="row">
				{products.map((p) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
						<div className="card">
							<Link to={`/product-detail/${p.id}`}>
								<img src={p.thumbnail} alt={p.name} />
							</Link>
							<div className="content">
								<h2>{p.title}</h2>
								<p>Gia: {p.price}</p>
								<button className="btn btn-primary w-100">Mua ngay</button>
								<Link to={`/product-detail/${p.id}`} className="btn btn-danger w-100">
									Xem chi tiet
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default HomePage;
