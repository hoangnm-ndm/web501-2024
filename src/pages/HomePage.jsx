import React from "react";

function HomePage({ products }) {
	return (
		<>
			<h1>San pham ban chay</h1>
			<div className="row">
				{products.map((p) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
						<div className="card">
							<img src={p.thumbnail} alt={p.name} />
							<div className="content">
								<h2>{p.title}</h2>
								<p>Gia: {p.price}</p>
								<button className="btn btn-primary w-100">Mua ngay</button>
								<button className="btn btn-danger w-100">Xem chi tiet</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default HomePage;
