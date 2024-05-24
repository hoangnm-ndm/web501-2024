import React from "react";

const Dashboard = ({ data }) => {
	console.log(data);
	return (
		<div>
			<h1>Hello Admin</h1>
			{JSON.stringify(data)}
			<table></table>
		</div>
	);
};

export default Dashboard;
