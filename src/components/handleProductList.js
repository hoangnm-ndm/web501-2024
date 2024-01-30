import instance from "../api";

const handleProductList = async () => {
  const productList = document.getElementById("productList");
  // Cach 3: Axios
  instance.get("/products").then((res) => {
    const data = res.data;
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
};

export default handleProductList;
