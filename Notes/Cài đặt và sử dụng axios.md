# 1. Cai dat

```
npm i axios concurrently json-server@0.17.0
```

# 2. Thay doi package.json

```json
"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000\""
```

# 3. Su dung

- trong App.js

```jsx
(async () => {
	try {
		const { data } = await api.get("/products");
		setProducts(data);
	} catch (error) {
		console.log(error);
	}
})();
```
