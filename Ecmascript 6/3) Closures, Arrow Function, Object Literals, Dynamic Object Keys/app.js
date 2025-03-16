// Closures
// function parent() {
//   var secretKey = "12345678910";

//   return function () {
//     return secretKey;
//   };
// }
// const parentFunc = parent();
// var result = parentFunc();
// console.log(result);

// Arrow Function

// greet();
// function greet() {
//   return "Hello World";
// }
// greet();

// const greet = (userName) => "Hello World " + userName;
// const result = greet('Ali');
// console.log(result);

// let name = "Honda";
// let price = 200000;

// const product = {
//   name,
//   price,
// };
// console.log(product);

let key = "price";
let obj = {
  [key]: 10000,
};
console.log(obj);
