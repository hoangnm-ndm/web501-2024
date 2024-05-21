const productsListElement = document.getElementById("productsList");

fetch("https://dummyjson.com/products")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch(console.log(error));

// TODO: Lấy danh sách sản phẩm hiển thị lên html
