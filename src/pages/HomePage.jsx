import React from "react";

const HomePage = ({ data }) => {
	return (
		<>
			<h1>San pham ban chay</h1>
			<div className="row">
				{data.map((item) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3">
						<div key={item.id}>
							<h2>{item.name}</h2>
							<p>{item.price}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default HomePage;
