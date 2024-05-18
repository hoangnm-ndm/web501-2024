const myInfor = {
	username: "hoangnm",
	email: "hoang@gmail.com",
	address: "HN",
	age: 18,
};

const { username, ...rest } = myInfor;
console.log(rest);

const teamLayKinh = ["Su phu", "Ngo khong", "bat gioi", "Sa tang", "Ngua Bach Long"];

const [Founder, ...cacDeTu] = teamLayKinh;
console.log(cacDeTu);
/**
 * 1. Rest là phần còn lại khi destructuring 1 object hoặc array.
 * 2. Rest thường xuất hiện khi khai báo
 * 3. Rest thường là biến được khai báo cuối để gom những phần còn lại.
 *
 * 4. Spread có nghĩa là trải ra, rải ra.
 * 5. Spread dùng khi đưa dữ liệu từ object, array cũ vào object, array mới.
 * 6. Spread có thể xuất hiện ở bất cứ vị trí nào trong khai báo gía trị object hoặc array nhưng thường xuất hiện ở đầu.
 */

const frontendDevs = ["Nhung", "Hoang", "Hoa"];
const backendDevs = ["Chien", "Vu", "Thu"];
// const nhomDATN = frontendDevs.concat(backendDevs).push("Dung");
const nhomDATN = [...frontendDevs, ...backendDevs, "Dung"];

const newMyInfor = {
	...myInfor,
	age: 19,
	linkFacebook: "http://...",
};
newMyInfor;
