// Loops

// if () { }

// 3 Arguements
// Initialization
// Condition
// Updation

// var number = 1;

// if (number === 1 && number < 0) { }

// = 0 1

// for (var i = 0; i < 20; i++) {
//     console.log(i);
// }

//  0 -1 -2 -3

// for (var i = 0; i < 20; i--) {
//     // console.log(i);
// }

// for (var i = 1; i <= 20; i++) {
//     console.log(i);
// }

// for (var i = 20; i > 0; i--) {
//     console.log(i);
// }

var listEl = document.getElementById("list");

// var fruits = ["Mango", "Apple", "Guava", "Watermelon", "Orange"];

// for (var i = 0; i < fruits.length; i++) {
//   var item = fruits[i];
//   listEl.innerHTML += '<li>' + item + '</li>';
// }

for (var i = 1; i <= 10; i++) {
  listEl.innerHTML += "<li> 10 x " + i + " = " + i * 10;
}

// var userCity = prompt("Enter Your City Name");
// var cities = ["Karachi", "Lahore", "Islamabad", "Mumbai"];

// // Boolean   true false

// var isCityFind = false;

// for (var i = 0; i < cities.length; i++) {

//   if (userCity === cities[i]) {
//     isCityFind = true;
//     break;
//   }
// }

// if (isCityFind === true) {
//   console.log("City Name is correct");
// } else {
//   console.log("City Name is not correct");
// }

// var firstNames = ["Ali", "Atif", "Salman", "Mudassir"];
// var lastNames = ["Huzaifa", "Aslam", "Khan", "Maqsood"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//   var completeName = firstNames[i] + " " + lastNames[i];
//   fullNames.push(completeName);
// }

// console.log(fullNames);

var numbers = [1, 30, 40, 222, 0, 9, 678, 2, 7];

// var array = [-3, -4, -2, -7, -3, -8, -9, -1043, 90, 26, 0, -0.9];

// // var greaterNumber = array[0];
// var smallNumber = array[0];

// for (var i = 0; i < array.length; i++) {
//   var item = array[i];
//   if (item < smallNumber) {
//     smallNumber = item;
//   }
// }

// console.log(smallNumber);

// var array = [
//   1, 3, 4, 2, 7, 3, 5, 6, 8, 9, 9, 1, 6, 10, 4, 5, 2, 7, 8, 10, 3, 5, 1, 6, 7,
//   9, 4, 2, 8, 10, 6, 3, 1, 5, 5, 10, 7, 4, 9, 2, 8,
// ];
// var userNumber = +prompt("Enter Number between 1 to 10");

// var numberCount = 0;
// for (var i = 0; i < array.length; i++) {
//   var element = array[i];
//   if (element === userNumber) {
//     numberCount++;
//   }
// }

// console.log(numberCount);

// Row
var columnCount = 1;
for (var i = 1; i <= 5; i++) {
  var row = "";
  // Columns
  for (var j = 1; j <= 5; j++) {
    row += " " + columnCount;
    columnCount++;
  }

  console.log(row);
}
