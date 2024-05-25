import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to=""></Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
