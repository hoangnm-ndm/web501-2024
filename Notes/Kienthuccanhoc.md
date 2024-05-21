# 1. Biến và phạm vi hoạt động, khai báo biến với var,let, const. -done

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

# 2. Template string -done

- Là cách để viết biểu thức javascript trong chuỗi một cách dễ dàng và thuận tiện, hỗ trợ xuống dòng...

```js
const name = "Hieu";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old`);
```

# 3. Destructuring -done

- Là cú pháp khai báo biến mới nhanh dựa vào các key hoặc index của một object hoặc một array.

# 4. Rest và spread -done

- Rest là toán tử gom phần còn lại của một dữ liệu phức tạp vào một biến mới.
- Rest luôn xuất hiện ở cuối khai báo.
- Spead là toán tử trải dữ liệu phức tạp ra thành các phần tử đơn lẻ.
- Spread có thể xuất hiện ở bất cứ vị trí nào trong khai báo, nhưng thường xuất hiện ở đầu.
- Spread có thể trải ra một mảng hoặc một object.
- Spread xuất hiện khi ta muốn sử dụng đến biến, còn rest thường xuất hiện khi khai báo biến.

# 5. Arrow function (Các loại function), IIFE -done

- Hàm mũi tên là hàm không dùng từ khóa "function" để khai báo.
- Hàm mũi tên không có phạm vi hoạt động riêng, nó sẽ lấy phạm vi hoạt động của hàm gần nhất.
- Hàm mũi tên không có từ khóa "this", "arguments", "super", "new.target".
- Hàm mũi tên không thể làm hàm constructor.
- Hàm mũi tên là cách viết rút gọn, dễ đọc, dễ hiểu, có trường hợp hàm mũi tên cũng là hàm ẩn danh vì nó không được khai báo tên hàm.
- IIFE là hàm tự gọi ngay sau khi khai báo.

# 6. Default parameter -done

# 7. Bất đồng bộ và xử lý bất đồng bộ: callback, promise, async/await.

# 8. Axios

# 9. Modules: import, export -done

# 10. ESLinst, Prettier, Coding convention, Clean code

# 11. Json-server, json-server-auth.