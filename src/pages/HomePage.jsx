import React from "react";

const HomePage = ({ data, isPublic }) => {
	return (
		<>
			<h1>San pham ban chay</h1>
			<div className="row">
				{isPublic &&
					data.map((item) => (
						<div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
							<div className="productItem">
								<img src={item.thumbnail} alt={item.title} />
								<div className="content">
									<h2>{item.title}</h2>
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
