// console.log("Test");

// type User = {
//   userName: string;
//   age: number;
// };

// type User1 = {
//   userName: string;
// };

// type User2 = {
//   age: number;
// };

// type User3 = {
//   cnic: string;
// };

// interface User {
//   userName: string;
//   age: number;
// }

// const object: User1 & User2 & User3 = {
//   userName: "Ali Huzaifa",
//   age: 30,
//   cnic: "",
// };
// console.log(object);

// Generics

// function reverseArray<T>(param: T[]) {
//   return param.reverse();
// }

// const result = reverseArray(["Test", "Test2"]);
// const result2 = reverseArray([1, 2, 3, 4, 5]);
// const result3 = reverseArray([
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 6],
// ]);
// console.log(result3);

// function name(params:type) {

// }
// name()

class User {
  myName: string;
  myAge: number;
  constructor(name: string, age: number) {
    this.myName = name;
    this.myAge = age;
  }
}

const user1 = new User("Ali Huzaifa", 23);
console.log(user1);