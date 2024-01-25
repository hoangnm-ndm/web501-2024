const user = { name: "John", password: "123" };
console.log(user);
const userDatabase = { ...user, role: "member" };
console.log(userDatabase);

const user2 = { ...user };
user2.age = 32;

console.log(user);
console.log(user2);

const students1 = ["Nghia"];
const students2 = ["Trang"];
const student3 = [...students1, "Tuan Tu", ...students2];

console.log(student3);
