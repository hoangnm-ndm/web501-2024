# 1. Biến và phạm vi hoạt động, khai báo biến với var,let, const.

- Var:
  - Khai báo biến với var có thể khai báo ở bất kỳ đâu trong scope của nó.
  - Biến khai báo với var có thể được gán giá trị trước khi khai báo.
  - Biến khai báo với var có thể được khai báo lại.
  - Biến khai báo với var có phạm vi hoạt động là function scope.
  - Biến khai báo với var có thể được truy cập trước khi khai báo(hoisting).
- Let:
  - Khai báo với let có thể được gán lại
  - Khai báo với let không thể khai báo lại
  - Khai báo với let có phạm vi hoạt động là block scope
  - Khai báo với let không thể truy cập trước khi khai báo (không bị hoisting)
- Const:
  - Khai báo với let không thể được gán lại
  - Khai báo với let không thể khai báo lại
  - Khai báo với let có phạm vi hoạt động là block scope
  - Khai báo với let không thể truy cập trước khi khai báo (không bị hoisting)

1. Template string

- Là cách để viết biểu thức javascript trong chuỗi một cách dễ dàng và thuận tiện, hỗ trợ xuống dòng...

```js
const name = "Hieu";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old`);
```

2. Destructuring

- Là cú pháp khai báo biến mới nhanh dựa vào các key hoặc index của một object hoặc một array.

3. Rest và spread
4. Arrow function (Các loại function), IIFE
5. Default parameter
6. Bất đồng bộ và xử lý bất đồng bộ: callback, promise, async/await.
7. Axios
8. Modules: import, export
9. ESLinst, Prettier, Coding convention, Clean code
10. Json-server, json-server-auth.
