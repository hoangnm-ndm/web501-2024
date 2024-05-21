const productElement = document.getElementById("productList");

fetch("https://dummyjson.com/products")
	.then((response) => response.json())
	.then(({ products }) => {
		products.forEach((item) => {
			const productItem = document.createElement("div");
			productItem.innerHTML = `
				<img src="${item.thumbnail}" alt="${item.title}" />
				<h3>${item.title}</h3>
				<p>${item.price}</p>
				<button className="btn">Add to card</button>
			`;
			productElement.appendChild(productItem);
		});
	})
	.catch((error) => console.log(error));

// TODO: BTVN: Sau khi lay dk danh sach san pham thi tim cach hien thi ra ngoai html
// async function fetchAPI() {
// 	try {
// 		const result = await fetch("https://dummyjson.com/products");
// 		const { products } = await result.json();
// 		console.log(products);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// fetchAPI();
