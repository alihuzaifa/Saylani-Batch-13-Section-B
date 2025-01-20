// Loops

// var a = 10;
// // if (a === 10) {
// //   console.log("Hello World");
// // } else if (a === 10) {
// //   console.log("Hello World");
// // }

// switch (a) {
//   case 10:
//     console.log("Hello World");
//     // break;

//   case 10:
//     console.log("Hello World");

//     break;

//   default:
//     break;
// }

// for loop      ==> jab apko fixed number of iteration pata hun
// while loop   ==> jab apko fixed iteration nahi maloom hun aur ap aik condition per depend karte hun

// do while loop

// var i = 0;
// var shouldLoopRun = true;
// while (shouldLoopRun === true) {
//     i++;
//     console.log(i);

//   if (i === 10) {
//     shouldLoopRun = false;
//   }
// }

// var shouldLoopRun = false;

// do {
//   console.log("Run");
// } while (shouldLoopRun);

// var imageEl = document.getElementById("id");

// imageEl.src = "/change.png";

var btn = document.getElementById("btn");
function greet() {
  alert("Hello World");
}
btn.addEventListener("mouseout", greet);

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (emailRegex.test("ali@gmail.com")) {
  console.log("Passed");
} else {
  console.log("Fail");
}
