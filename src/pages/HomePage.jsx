import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ data }) => {
	return (
		<>
			<h1>San pham ban chay</h1>
			<div className="row">
				{data.map((item) => (
					<div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
						<div className="productItem">
							<Link to={`/product-detail/${item.id}`}>
								<img src={item.thumbnail} alt={item.title} />
							</Link>
							<div className="content">
								<Link to={`/product-detail/${item.id}`}>
									<h2>{item.title}</h2>
								</Link>
								<p>Gia: {item.price}</p>
								<button className="btn btn-danger">Add to cart</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default HomePage;
