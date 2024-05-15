# 1. Cài đặt:

```
  npm i react-router-dom
```

# 2. Thêm BrowserRouter vào main.jsx:

```jsx
import { BrowserRouter } from "react-router-dom";
//...
<BrowserRouter>
	<App />
</BrowserRouter>;
```

# 3. Sử dụng Route trong App.jsx

```jsx
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
```

# 4. Sử dụng Link để chuyển trang

```jsx
<Link to="/">Home</Link>
```
