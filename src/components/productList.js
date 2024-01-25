import instance from "../api";

const ProductList = async () => {
  const productList = document.getElementById("productList");
  // fetch("http://localhost:3000/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     productList.innerHTML = `
  //         ${data
  //           .map((product) => {
  //             return `
  //             <div>${product.title}</div>
  //             <div>${product.price}</div>
  //             <div>${product.description}</div>
  //             <img src="${product.thumbnail}" alt="${product.title}" />
  //           `;
  //           })
  //           .join("")}
  //         `;
  //   })
  //   .catch((error) => console.log(error));
  // Cach 2: Viet theo async/await
  // const res = await fetch("http://localhost:3000/products");
  // const data = await res.json();
  // if (data) {
  //   // xu ly khi co data
  // } else {
  //   // xu ly khi khong co data
  // }

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

export default ProductList;
