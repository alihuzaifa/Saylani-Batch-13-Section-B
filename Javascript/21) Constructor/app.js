// var studentNames = ["", "", ""];
// var studentAges = [1, 2, 3, 4, 5];
// var studentIds = [1, 2, 3, 4, 5];

// Object

// Key Value

// var user = {
//   name: "Ali Huzaifa",
//   age: 22,
//   favouriteFruits: ["Mango", "Apple"],
//   maritalStatus: false,
// };

// var user = {
//   education: "Master",
// };

// user.education = "BSCS";
// user.course = "Web & App";

// delete user;

// console.log(user);

// var fruits = ["Mango"];
// fruits[1] = "Apple";
// console.log(fruits);

// console.log(window.prompt('Hello'));

// var user = {
//   name: "Ali Huzaifa",
//   age: 22,
//   favouriteFruits: ["Mango", "Apple"],
//   maritalStatus: false,
//   greet: function () {
//     alert("");
//   },
// };

// console.log(user.greet());

// var date = new Date()
// console.log(date);

function User(userName, userAge, matric) {
  // Delete

  // Add New one
  this.name = userName;
  this.age = userAge;
  this.greet = function () {
    alert("Hello");
  };
  this.qualification = {
    matric: matric,
    inter: "",
    bachelors: "",
    masters: "",
  };
}
var user1 = new User("Ali Huzaifa", 22, "yes");
var user2 = new User("Aslam", 20, "no");
console.log(user1);
console.log(user2);

// debugger
// console.log(this===window);
