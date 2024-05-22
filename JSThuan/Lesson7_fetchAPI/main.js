const productsListElement = document.getElementById("productsList");

fetch("https://dummyjson.com/products")
	.then((response) => response.json())
	.then(({ products }) => {
		console.log(products);

		const content = products
			.map((item) => {
				return `
				<div>
					<h2>${item.title}</h2>
				</div>
			`;
			})
			.join("");
		productsListElement.innerHTML = content;
	})
	.catch((error) => {
		console.log(error);
	});
// TODO: Lấy danh sách sản phẩm hiển thị lên html
