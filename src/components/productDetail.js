import { getOne } from "../api/product.api";

const productDetail = (data) => {
  const productElement = document.getElementById("product");
  getOne(+data.data.id).then(({ data }) => {
    const content = `
    <img src="${data.thumbnail}" alt="${data.title}" />
    <h2>${data.title}</h2>
    <div>Giá: ${data.price}</div>
    <div>Chi tiết: ${data.description}</div>    
    `;
    productElement.innerHTML = content;
  });
};

export default productDetail;
