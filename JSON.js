// JSON = Javascript Object Notation

var myInfor = {
  name: "Hoang",
  age: 32,
};
console.log(typeof myInfor);
var myInforString = JSON.stringify(myInfor);
console.log(typeof myInforString);
console.log(JSON.parse(myInforString));
// console.log(JSON.parse("{jnsdjshdsdsdsds{{{[[[]]]}}}}")); // sai
