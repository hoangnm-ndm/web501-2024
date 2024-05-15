import { Link } from "react-router-dom";

function Header() {
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
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
