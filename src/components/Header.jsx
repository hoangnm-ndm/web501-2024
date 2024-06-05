import { Link, useNavigate } from "react-router-dom";

function Header() {
	const nav = useNavigate();
	const email = JSON.parse(localStorage.getItem("user"))?.user?.email;
	const handleLogout = () => {
		if (confirm("Logout?")) {
			localStorage.removeItem("user");
			nav("/login");
		}
	};
	return (
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				{email ? (
					<li>
						<button onClick={handleLogout}>{email}Logout</button>
					</li>
				) : (
					<li>
						<Link to="/login"> Login</Link>
					</li>
				)}
			</ul>
		</header>
	);
}

export default Header;
