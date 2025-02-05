// var myName = "Ali Huzaifa";
// console.log(myName);

// function calculator(number1, number2, operator) {
//   if (operator === "+") {
//     return number1 + number2;
//   } else if (operator === "-") {
//     return number1 - number2;
//   } else if (operator === "*") {
//     return number1 * number2;
//   } else if (operator === "/") {
//     return number1 / number2;
//   } else if (operator === "%") {
//     return number1 % number2;
//   } else {
//     return "Invalid Operator";
//   }
// }

// var sum = calculator(10, 10, "+");
// var sub = calculator(10, 10, "-");
// var mul = calculator(10, 10, "*");
// var div = calculator(10, 10, "/");
// var mod = calculator(10, 2, "%");
// console.log(sum, sub, mul, div, mod);

// var userNumber = +prompt("Enter a number", 0);
// if (userNumber % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// var sentence = "A quick brown fox jumps over the lazy dog";
// console.log(sentence.length);
// var count = 0;
// for (var i = 0; i < sentence.length; i++) {
//   count++;
// }
// console.log(count);

// var firstName = "Ali ";
// var lastName = "Huzaifa";
// console.log(firstName + lastName);

// var number1 = +"10";
// var number2 = +"20";
// console.log(number1 + number2);

// function check(number) {
//   if (number === 0) {
//     return "Zero";
//   } else if (number > 0) {
//     return "Positive";
//   } else {
//     return "Negative";
//   }
// }

// var result = check(2)
// console.log(result);

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var total = 0;
// for (var i = 0; i < numbers.length; i++) {
//   var item = numbers[i];
//   total = total + item;
// }
// console.log(total);

// var text = "Team";
// // console.log(text.reverse());
// // 4 - 1 = 3
// var reverseText = "";
// for (var i = text.length - 1; i >= 0; i--) {
//   var item = text[i];
//   reverseText += item;
// }
// console.log(reverseText);

// 1 se 10 ===> Fibonacci
// var a = 0;
// var b = 1;

// a = b;
// b = a + b;

function fibonacci(number) {
  var a = 0;
  var b = 1;

  for (var i = 1; i <= number; i++) {
    console.log(a, b);
    var next = a + b;
    a = b;
    b = next;
  }
}
fibonacci(10);
