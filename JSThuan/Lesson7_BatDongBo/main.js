const productElement = document.getElementById("productList");
console.log(productElement);

// fetch("https://dummyjson.com/products")
// 	.then((response) => response.json())
// 	.then(({ products }) => {
// 		console.log(products);
// 	})
// 	.catch((error) => console.log(error));

// TODO: BTVN: Sau khi lay dk danh sach san pham thi tim cach hien thi ra ngoai html
async function fetchAPI() {
	try {
		const result = await fetch("https://dummyjson.com/products");
		const { products } = await result.json();
		console.log(products);
	} catch (error) {
		console.log(error);
	}
}

fetchAPI();
