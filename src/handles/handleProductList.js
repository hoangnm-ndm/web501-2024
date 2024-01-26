const handleProductList = async () => {
  const productList = document.getElementById("productList");
  try {
    // Cú pháp cũ:
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));

    // Cú pháp async/await:
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
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
