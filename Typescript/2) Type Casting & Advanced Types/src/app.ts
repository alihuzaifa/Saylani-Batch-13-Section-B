// console.log("Test");
// console.log("Test");

// const userName: string = "Ali Huzaifa";
// const rollNumber: number = 12345;

// const inputEl = document.getElementById("todo") as HTMLInputElement;
// const btn = document.getElementById("btn") as HTMLButtonElement;

// btn.addEventListener("click", () => {
//     console.log(inputEl.value);
// });

// type User = {
//   name: string;
//   age: number;
// };

// let object: User = {
//   name: "Salman",
//   age: 22,
// };

// console.log(object);

// let key1 = "name";
// let key2 = "age";

// let object: User = {
//   [key1]: "Salman",
//   [key2]: 22,
// };

// let unknownValue: string | number;
// unknownValue = "Test"; // Valid
// unknownValue = 111; // Valid
// // unknownValue = true; // Invalid

// console.log(unknownValue);

// type User = {
//   name: string;
// };

// type User2 = {
//   age: number;
// };

// type Combined = User & User2;

// let object: Combined = {
//   name: "Ali Huzaifa",
//   age: 21,
// };
// console.log(object);

const merged = (param1: string | number, param2: string | number) => {
  if (typeof param1 === "string" && typeof param2 === "string") {
    return `Hello ${param1} ${param2}`;
  } else if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
};
const result = merged("Ali", "Huzaifa");
const result2 = merged(10, 20);
console.log(result);
console.log(result2);