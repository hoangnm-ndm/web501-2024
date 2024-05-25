import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
	return (
		<div className="row justify-between">
			{data.map((item) => (
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 card" key={item.id}>
					<Link to={`/product-detail/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} />
					</Link>
					<div className="content">
						<Link to={`/product-detail/${item.id}`}>
							<h2>{item.title}</h2>
						</Link>
						<p>Gia: {item.price}</p>
						<button className="btn btn-danger">Xem chi tiet</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
