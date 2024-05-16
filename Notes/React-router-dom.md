# 1. Cai dat

```
  npm i react-router-dom
```

# 2. Them BrowerRouter vao main.jsx

```jsx
<BrowserRouter>
	<App />
</BrowserRouter>
```

# 3. Vao App.js them Routes

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/login" element={<Login />} />
	<Route path="/about" element={<About />} />
	<Route path="*" element={<NotFound />} />
</Routes>
```

# 4. Vao component Header them Link

```jsx

```
