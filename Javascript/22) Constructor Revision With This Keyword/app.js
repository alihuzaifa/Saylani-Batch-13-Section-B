var nameEl = document.getElementById("name");
var ageEl = document.getElementById("age");
var qualificationEl = document.getElementById("qualification");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

var allUsers = [];

function User(userName, userAge, qual) {
  //   console.log(this);
  this.name = userName;
  this.age = userAge;
  this.qualification = qual;
  //   console.log(this);
}

function render() {
  list.innerHTML = "";
  for (var index = 0; index < allUsers.length; index++) {
    var item = allUsers[index];
    list.innerHTML += `<li>Name: ${item.name} Age: ${item.age}  Qualification: ${item.qualification}</li>`;
  }
}

function AddUser() {
  var obj = new User(nameEl.value, ageEl.value, qualificationEl.value);
  allUsers.push(obj);
  nameEl.value = "";
  ageEl.value = "";
  qualificationEl.value = "";
  render();
}

btn.addEventListener("click", AddUser);

// var firstName = "Abdul";
// var lastName = "Hameed";
// var combineName = `${firstName} ${lastName}`;
// console.log(combineName);

// var obj = {
//   name: "Ali",
//   age: 20,
//   greet: function () {
//     console.log(this);
//   },
// };

// console.log(obj.greet());

// console.log(this);

// function greet() {
//   console.log(this);
// }
// greet();

// function User(userName, userAge, qual) {
// //   console.log(this);
//   this.name = userName;
//   this.age = userAge;
//   this.qualification = qual;
// //   console.log(this);
// }

// var user = new User("Ali", 22, "Inter");
// var user2 = new User("Aslam", 20, "Inter");
// user.qualification = "Matric";

// console.log(user);
// console.log(user2);

// var obj = {
//   name: "Ali",
//   age: 11,
// };
// obj.name = 'Aslam';
// console.log(obj);
