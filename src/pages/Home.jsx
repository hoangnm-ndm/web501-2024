const Home = ({ data }) => {
	console.log(data);
	return (
		<>
			<div className="row">
				{data.map((p) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img src={p.thumbnail} alt="" />
							<div className="content">
								<h2>{p.title}</h2>
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
