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

// function fibonacci(number) {
//   var a = 0;
//   var b = 1;

//   for (var i = 1; i <= number; i++) {
//     console.log(a);
//     var next = a + b;
//     a = b;
//     b = next;
//   }
// }
// fibonacci(10);

// var numbers = [1, 2, 3, 4, 5, 21, 6, -1, -2, -66, 7, 8, 9, 10];
// var largestNumber;
// for (var i = 0; i < numbers.length; i++) {
//   if (i === 0) {
//     largestNumber = numbers[0];
//   }

//   var item = numbers[i];
//   if (item < largestNumber) {
//     largestNumber = item;
//   }
// }
// console.log(largestNumber);

// var userNumber = +prompt("Enter a number");
// if (userNumber % 3 === 0 && userNumber % 5 === 0) {
//   console.log("Correct");
// } else {
//   console.log("Wrong");
// }

var numbers = [1, 2, 2, 3, 4, 7, 8, 9, 7, 5, 3, 2, 1, 3];
// var uniqueNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//   var parentItem = numbers[i];
//   var isDuplicate = false;

//   for (var inner = 0; inner < uniqueNumbers.length; inner++) {
//     var innerItem = uniqueNumbers[inner];
//     if (innerItem === parentItem) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (isDuplicate === false) {
//     uniqueNumbers.push(parentItem);
//   }
// }

// console.log(uniqueNumbers);

// var uniqueNumbers = new Set(numbers);
// console.log(Array.from(uniqueNumbers));

var sentence = "a quick brown fox jumps over the lazy dog";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
  var item = sentence[i];
  if (item === "a") {
    count++;
  }
}
console.log(count);
