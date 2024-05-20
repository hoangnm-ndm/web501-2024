fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	});

// TODO: Lấy danh sách sản phẩm hiển thị lên file index.html với giao diện đầy đủ (ảnh, tên, giá, nút mua hàng)
// Nếu không cài thành công json-server thì xem lại hướng dẫn trong file notes/Lesson7.json-server.md
/**
 * Gợi ý:
 * ?1. Khởi chạy server với câu lệnh: `npm run server`
 * ?2. Tạo 1 element trong html.
 * ?3. Sau khi lấy được dự liệu, add dữ liệu vào element ở bước 2 bởi innerHTML
 */
