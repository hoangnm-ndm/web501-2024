const myInfor = {
	username: "hoang",
	email: "hoangnmsiucap@gmail.com",
	age: 30,
	address: "BG",
};

const { username, email, ...restObject } = myInfor;

console.log(username);
console.log(restObject);

const myChildren = ["Dung", "Hoa", "Huan", "Mai"];

const [con1, con2, ...rest] = myChildren;
console.log(rest);

//! rest là phần còn lại khi chúng ta destructuring một biến có kiểu dữ liệu phức tạp.

const teamLayKinh = ["Duong Tang", "Ngo Khong", "Bat Gioi", "Sa Tang", "Ngua Bach Long"];

// TODO: Lấy ra phần tử thứ 2 của teamLayKinh phía trên bằng destructuring
