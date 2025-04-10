// Rest Parameters

// function sum(...numbers) {
//   let total = 0;
//   const inputs = [...numbers];
//   for (let index = 0; index < inputs.length; index++) {
//     const element = inputs[index];
//     total += element;
//   }
//   console.log(total);
// }
// const output = sum(10, 10);

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let mergeArray = [...array1, ...array2, 11, 12, 13, 14, 15];
// console.log(mergeArray);

// function greet(userName) {
//   return `Hello ${userName}`;
// }
// const output = greet("Ali Huzaifa");
// console.log(output);

// const greet = (userName) => `Hello ${userName}`;
// const output = greet("Ali Huzaifa");
// console.log(output);

// const name = "Ali";
// const age = 22;
// const education = "BSCS";

// const obj = {
//   name,
//   age,
//   education,
// };
// console.log(obj);

// const name = "Hussain";
// const key = "myName";
// const obj = {
//   [key]: name,
// };
// console.log(obj);

// const newNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element);

//   //   newNumbers.push(element * 10);
// }
// console.log(newNumbers);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.map((item) => item * 10);
console.log(result);
