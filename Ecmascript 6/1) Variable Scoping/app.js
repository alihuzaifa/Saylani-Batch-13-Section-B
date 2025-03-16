// Variable Scoping
// var    Global Scoping
// let    Lexical Scoping
// const  Same Lexiacl But Value Should be fixed and unchanged

// var condition = "No";

// console.log(myVar);
// if (true) {
//   let myVar = "Yes";
// }
// console.log(myVar);

// {
// }

// if (true) {
//     let myVar = "Yes";
//     console.log(myVar);
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// function name(params) {}

// while (condition) {}
// console.log(myVar);

// const PIE = 3.142;
// PIE = 323;
// console.log(PIE);

// const user = {
//   name: "Ali",
//   age: 22,
// };
// user.name = "Ahmed";
// console.log(user);

// var fullName = `Ali Huzaifa`;
// console.log(fullName);

const obj = { name: "Ali", age: 20, education: "BSCS" };

const { name, age, education } = obj;
console.log(obj.name);
console.log(name, age, education);
