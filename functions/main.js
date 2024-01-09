/**
 *
 */

// Named function
function sum(a, b) {
  return a + b;
}

// expression function
// const sum = function (a, b) {
//   return a + b;
// };

// arrow function
const sum = (a, b) => a + b;

const returnObj = () => {
  return {
    name: "hoang",
    age: 32,
  };
};
const returnObj2 = () => ({
  name: "hoang",
  age: 32,
});
