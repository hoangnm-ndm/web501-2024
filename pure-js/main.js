const productList = document.getElementById("productList");

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    productList.innerHTML = `
    ${data
      .map((product) => {
        return `
      <div>${product.title}</div>
      <div>${product.price}</div>
      <div>${product.description}</div>
      <img src="${product.thumbnail}" alt="${product.title}" />
      `;
      })
      .join("")}
    `;
  });
