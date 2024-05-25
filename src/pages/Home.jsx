import React from "react";

const Home = ({ data }) => {
	return (
		<div>
			<div className="row">
				{data.map((item) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 item" key={item.id}>
						<div>
							<img src={item.thumbnail} alt={item.title} />
						</div>
						<div className="content">
							<h2>{item.title}</h2>
							<p>Gia: {item.price}</p>
							<button className="btn btn-danger">Xem chi tiet</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
