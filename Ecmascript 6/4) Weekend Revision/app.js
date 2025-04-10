// 1 Variable Scoping

// var  myName = ''

// var
// let
// const

// console.log(myName);

// var myName = "Ali Huzaifa";

// console.log(myName);

// greet();

// function greet() {
//   console.log("Hello World");
// }

// Hoisting

// console.log(myName);

// let myName = "Ali Huzaifa";

// console.log(myName);

// if (true) {
//   var totalValue = 1000;
// }

// for (var index = 0; index < 10; index++) {
//   var myName = "Atif";
// }

// function greet() {
//   var myAge = 22;
//   console.log(myAge);
// }

// console.log(totalValue);
// console.log(myName);
// console.log(myAge);

// Lexical Scope
// if (true) {
//   let totalValue = 1000;
//   console.log(totalValue);
// }

// for (var index = 0; index < 2; index++) {
//   let totalValue = 5000;
//   console.log(totalValue);
// }

// const PIE = 3.142;
// console.log(PIE);

// const obj = {
//   name: "Aslam",
//   age: 10,
// };
// // obj = { gender: "Male" };
// obj.name = "Atif";
// obj.age = 20;
// console.log(obj);

// let firstName = "Ali";
// let lastName = "Huzaifa";
// // let combinedName = firstName + lastName;
// let combinedName = `${firstName} ${lastName}`;
// console.log(combinedName);

// let obj = {
//   name: "Ali Huzaifa",
//   age: 15,
// };

// let { name, age } = obj;
// // let { name, age } = obj;
// // console.log(obj.name, obj.age);
// console.log(name, age);

// let fruits = ["Apple", "Banana", "Mango"];
// let [first, second, third] = fruits;
// // console.log(fruits[0], fruits[1], fruits[2]);
// // console.log(fruits[0], fruits[1], fruits[2]);
// console.log(first, second, third);

// console.log(name);
// let totalStudentsRecord = {

// }
// totalStudentsRecord.name
// name


// Default Parameters
function greet(name = "Huzaifa") {
  console.log(`Assalamu Alaikum ${name}`);
}

greet("Ali");
greet();
