const HomePage = () => {
  return `<h2>HomePage</h2>`;
};

const HomePage2 = () => {
  return `<h2>HomePage</h2>`;
};

export const datas = [
  { id: "123", name: "Iphone 15 pro", price: 2000 },
  { id: "123", name: "Iphone 15 pro", price: 2000 },
  { id: "123", name: "Iphone 15 pro", price: 2000 },
  { id: "123", name: "Iphone 15 pro", price: 2000 },
];

export { HomePage, HomePage2 };
// export default HomePage;
// export default HomePage2;

/**
 * 1. Chỉ Export default được 1 lần.
 * 2. Ko export default trên chính dòng khai báo biến được
 * 3. Nếu không export defaul thì có thể viết export cùng dòng khai báo biến.
 * 4. Có thể gom các biến cần export vào một object
 * 5. "type": "module"
 */
