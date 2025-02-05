// var headingElement = document.getElementById("heading");
// headingElement.className = "heading2";
// headingElement.id = "heading2";
// headingElement.style.backgroundColor = "red";
// headingElement.style.border = "1px solid black";
// headingElement.style.color = "white";

// headingElement.className += " heading2";
// heading heading2

// var paragraphs = document.getElementsByTagName("p");
// paragraphs[0].innerHTML = "Hello World";
// console.log(paragraphs);

// var paragraph = document.querySelector(".para");
// var paragraph = document.querySelectorAll(".para");
// var paragraph = document.getElementsByClassName("para");
// console.log(paragraph);

// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// var array = ["abcd", "efgh"];

// Object
// key value
// var student = {
//   name: "ALi Huzaifa",
//   id: 12345,
//   age: 20,
// };
// console.log(student);

// debugger
var student = {
  name: "Aslam",
};

function userGreet() {
  alert("Hello World");
}

student.name = "Ali Huzaifa";
student.fruits = ["Apple", "Mango"];
student.age = 22;
student.id = 12345;
student.greet = userGreet;

delete student.age;
console.log(student);


// console.log(student.greet());
// window.alert('Hello')
