// console.log(schools);
if (3 > 2) {
	{
		{
			{
				{
					{
						{
							// ! block scope
							var username = "hoang";
							let email = "hoangjs@gmail.com";
							email = "hoangphp@gmail.com";
							// let email;
							// ! Cannot redeclare block-scoped variable 'email'
							// console.log(email);
						}
						// console.log(email);
					}
				}
			}
		}
	}
	// console.log(username);
}

// console.log(username);

// var schools = "FU"; // ! -> var schools; schools = "FU"
let schools = "FU";
// var schools = "FPOLY";

// schools = "VNU";
// console.log(schools);

const pi = 3.14;
const myInfor = {
	email: "hoangjs@gmail.com",
	age: 18,
};

myInfor.age = 19;
console.log(myInfor);

const myStudents = ["Chinh", "Nhung"];
myStudents.push("Donal Trumb");
console.log(myStudents);

// ? push, pop, shift, unshift, slice, splice, concat, join, reduce, forEach, map, filter, find
