const HomePage2 = () => {
  return `<h2>HomePage</h2>`;
};

export const datas = [
  { id: "123", name: "Iphone 15 pro", price: 2000 },
  { id: "123", name: "Iphone 16 pro", price: 2200 },
  { id: "123", name: "Iphone 17 pro", price: 2300 },
  { id: "123", name: "Iphone 18 pro", price: 2500 },
];

const html = datas
  .map((item) => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.price}</p>
        <a href="#" class="btn btn-primary">View detail</a>
      </div>
    </div>
  `;
  })
  .join("");

const HomePage = () => {
  return html;
};

export { HomePage, HomePage2 };
// export default HomePage;
// export default HomePage2;

/*
 * 1. Chỉ export default được 1 lần.
 * 2. Ko export default trên chính dòng khai báo biến được
 * 3. Nếu không export defaul thì có thể viết export cùng dòng khai báo biến.
 * 4. Có thể gom các biến cần export vào một object
 * 5. "type": "module"
 */
