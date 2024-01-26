const user = {
  name: "hoang",
  age: 18,
  address: "HN",
};

// const name = user.name;
// const age = user.age;
// const address = user.address;

const { name, age, address } = user;
console.log(name);

const students = ["Dat", "Long", "Minh", "Chi", "Viet"];

// const theFirst = students[0]
const [theFirst, theSecond, ...rest] = students;
console.log(theFirst);
console.log(theSecond);
