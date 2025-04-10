// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Aisha", age: 30 },
//   { name: "Ahmed", age: 35 },
// ];

// const result = people.map(({ name }) => name);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const removeEvenNumbers = numbers.filter((item) => item % 2 !== 0);
// console.log(removeEvenNumbers);

// const people = [
//   { name: "Ali", age: 17 },
//   { name: "Aisha", age: 22 },
//   { name: "Ahmed", age: 15 },
//   { name: "Sara", age: 20 },
// ];

// const filterAdults = people.filter(({ age }) => age >= 19);
// console.log(filterAdults);

// const words = ["apple", "banana", "kiwi", "mango", "grapefruit"];
// const filterWords = words.filter((item) => item.length > 5);
// console.log(filterWords);

// const names = ["Ali", "Aisha", "Ahmed", "Sara"];
// const updatedNames = names.map((item, i) => {
//   if (i % 2 === 0) {
//     return `Mr ${item}`;
//   } else {
//     return `Mrs ${item}`;
//   }
// });
// console.log(updatedNames);

// const numbers = [2, 4, 6, 8];
// const squareNumbers = numbers.map((item) => item ** 2);
// console.log(squareNumbers);

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 300, inStock: true },
// ];
// const totalPrice = products.reduce((initialValue, { inStock, price }) => {
//   if (inStock === true) {
//     return initialValue + price;
//   } else {
//     return initialValue;
//   }
// }, 0);
// console.log(totalPrice);

// const names = ["Ali", "Aslam", "Atif"];
// names.forEach((item, i, array) => {
//   array[i] = `Mr ${item}`;
// });
// console.log(names);

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 300, inStock: true },
// ];
// const searchResult = products.find(({ price }) => price === 300);
// console.log(searchResult);

// var condition = true;

// var number = 20;

// for (var index = 0; index < 5; index++) {
//   var number = 10;
// }
// console.log(number);

// function name() {
//   var number = 10;
//   console.log(number);
// }
// name();
// console.log(number);

// debugger;
// console.log(number);
// var number = 10;
// debugger;
// console.log(number);

// debugger;
// call();
// function call() {
//   console.log("Call");
// }

// let
// const

// console.log(number);
// let number = 10;
// number = 15;
// console.log(number);

// let number = 20;

// let condition = true;
// if (condition) {
//   let number = 10;
//   console.log(number);
// }

// console.log(number);

// let condition = true;
// if (condition) {
//   let number = 10;
//   console.log(number);
// }

// for (var index = 0; index < 1; index++) {
//   let number = 50;
//   console.log(number);
// }

// let number = 10;
// let number = 10;

// const PIE = 3.142;
// console.log(PIE);

// let firstName = "Atif";
// let secondName = "Anwar";
// console.log(
//   `${firstName}

//   ${secondName}`
// );

// console.log(
//   firstName
//   + secondName
// );

// let obj = {
//   name: "Aslam",
//   age: 22,
//   gender: "Male",
// };

// let { name, age, gender } = obj;

// console.log(obj.age, obj.gender, obj.name);
// console.log(name, age, gender);

// let fruits = ["Apple", "Mango", "Grapes"];
// // console.log(fruits[1]);
// // console.log(fruits[0]);
// // console.log(fruits[2]);
// let [a, b, c] = fruits;
// console.log(b, c);

// function greet(name = "Ali") {
//   console.log(`Hello ${name}`);
// }

// greet("Huzaifa");
// greet();

function sum(number1 = 0, number2 = 0) {
  console.log(number1 + number2);
}
sum(10, 20);
sum(50);
