import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
