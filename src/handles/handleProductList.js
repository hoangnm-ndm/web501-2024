import instance from "../apis";
import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("productList");
  try {
    // Dùng instance của axios:
    const { data } = await instance.get("/products");

    if (data) {
      const contentHTML = data
        .map(
          (item) => /*html*/ `
        <div class="product-card">
         <img src="${item.thumbnail}" alt="${item.title}" />
         <div class="product-infor">
           <h2>${item.title}</h2>
           <div>Giá: ${item.price}</div>
           <p>Mô tả: ${item.description}</p>
         </div>
        </div>
      `
        )
        .join("");
      productList.innerHTML = contentHTML;
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
