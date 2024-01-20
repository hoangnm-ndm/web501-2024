import { getAll } from "../api/product.api";

const ProductList = () => {
  const productList = document.getElementById("productList");
  console.log(productList);
  getAll().then(({ data }) => {
    const contentHTML = data
      .map(
        (item) => `
        <div class="product-card">
        <img src="${item.thumbnail}" alt="${item.title}" />
        <div class="product-infor">
         <h2>${item.title}</h2>
        <div>Giá: ${item.price}</div>
        <p>Mô tả: ${item.description}</p>
        <a data-navigo href="products/${item.id}">Xem chi tiết</a>
        </div>
        </div>
        `
      )
      .join("");
    productList.innerHTML = contentHTML;
  });
};

export default ProductList;
