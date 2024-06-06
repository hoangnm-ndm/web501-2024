import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
	const user = JSON.parse(localStorage.getItem("user"))?.accessToken;
	return user ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
