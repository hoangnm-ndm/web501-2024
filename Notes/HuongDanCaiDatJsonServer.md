# 1. Cai dat:

`npm i json-server@0.17.0`

# 2. Tao file db.json:

- Them du lieu fake vao.

# 3. Thay doi script trong pagkage.json:

```json
	"scripts": {
		"dev": "concurrently \"vite dev\" \"json-server --watch db.json --port 3000\"",
		"build": "vite build",
		"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview"
	},
```
