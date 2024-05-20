Buoc 1: cai dat:
`npm i json-server concurrently`

Buoc 2: tao file db.json va them data fake

Buoc 3: Thay doi script `dev`

```json

	"dev": "concurrently \"vite --port 5173\" \"json-server --watch db.json --port 3000\"",
	"server": "json-server --watch db.json --port 3000",
```
