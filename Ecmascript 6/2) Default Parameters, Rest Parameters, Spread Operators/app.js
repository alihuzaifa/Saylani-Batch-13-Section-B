// var obj = {
//   name: "Ali",
//   age: 22,
// };

// const { name, age } = obj;
// console.log(name, age);

// const { name, age } = obj;

// var fruits = ["Apple", "Banana", "Mango"];
// const [index0, index1, index2] = fruits;
// // const [index1, index2, index3] = fruits;
// console.log(index0, index1, index2);

// Default Parameters
// function greet(userName = "Huzaifa") {
//   return `Hello ${userName}`;
// }
// var result1 = greet("Ali");
// var result2 = greet();
// console.log(result1);

// Rest Parameters
// function sum(...numbers) {
//   var list = [...numbers]; // Spread Operator
//   var total = 0;
//   for (let index = 0; index < list.length; index++) {
//     var item = list[index];
//     total += item;
//   }
//   return total;
// }
// var result = sum(10, 20);
// console.log(result);

var array1 = [1, 2, 3, 4, 5, 6, 7];
var array2 = [11, 12, 13, 14, 15, 16, 17];
var array3 = [21, 22, 23, 24];
var mergedArray = [...array1];
console.log([...array1, ...array2, ...array3]);
