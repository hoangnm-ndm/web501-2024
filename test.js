const productEle = document.getElementById("product");

fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((data) => {
		const content = data.map((item) => {
			return /*html*/ `
      <div>
        <div>${item.title}</div>
        <div>${item.price}</div>
        <div>${item.description}</div>
        <div><img src="${item.thumbnail}"/></div>
      </div>
      `;
		});
		productEle.innerHTML = content;
	});

const fetchAPI = async () => {
	try {
		const res = await fetch("http://localhost:3000/products");
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

fetchAPI();
