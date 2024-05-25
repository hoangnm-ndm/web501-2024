import { Link } from "react-router-dom";

const Header = () => {
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
					<Link to="/">Shop</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/contact"></Link>
				</li>
			</ul>
		</header>
	);
};

const a = 10;

export default Header;
