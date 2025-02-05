// function User(userName, userAge) {
//   this.name = userName;
//   this.age = userAge;
// }

// var user = new User("Umair", 22);
// console.log(user.name);

// var fruits = ["Apple", "Peach"];
// fruits.push('Mango')
// console.log(fruits);

// function greetUser() {
//   alert("Hello");
// }

// function User(userName, userAge) {
//   this.name = userName;
//   this.age = userAge;
// //   this.code = 123;
// }

// // User.prototype.greet = greetUser;
// User.prototype.code = 123;

// var user = new User("Umair", 22);
// var user2 = new User("Aslam", 22);
// console.log(user.code);
// console.log(user2);

// var obj = {};
// obj.name = "Ali Huzaifa";

// var obj = {
//   name: "Ghous",
//   age: 26,
//   education: "BSCS",
//   hobbies: ["Football", "Cricket", "Tennis"],
//   gender: "Male",
// };
// console.log(obj.hasOwnProperty("email"));

// // console.log(obj);
// // For In Loop
// for (var key in obj) {
//   console.log(obj[key]);
// }

// // obj.name;
// // obj["name"];

// console.log(window.location.href);

// var btn = document.getElementById("btn");
// function navigation() {
//   //   console.log("Button Clicked");
//   //   window.location.href = "https://www.facebook.com";
//   window.location.replace("https://www.facebook.com");
// }
// btn.addEventListener("click", navigation);

// console.log(window.location.hostname);   // Domain
// console.log(window.location.origin);

var btn = document.getElementById("btn");
function navigation() {
  window.location.href = "about/about.html";
}
btn.addEventListener("click", navigation);
