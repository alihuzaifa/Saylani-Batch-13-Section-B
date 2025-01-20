// var numbers = [
//   12, 45, 23, 78, 56, 89, 34, 67, 90, 21, 33, 54, 76, 43, 11, 92, 61, 28, 77,
//   85, 19, 60, 38, 59, 42, 14, 80, 99, 30, 66, 22, 91, 73, 40, 51, 18, 62, 63,
//   50, 36,
// ];

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   var item = numbers[i];
//   if (item % 2 === 0) {
//     sum += item;
//   }
// }

// console.log(sum);

// var text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// var convertTextIntoArray = text.split(" ");
// var longestWord = "";

// for (var i = 0; i < convertTextIntoArray.length; i++) {
//   var item = convertTextIntoArray[i];
//   if (item.length > longestWord.length) {
//     longestWord = item;
//   }
// }

// console.log(longestWord);

// user 5
// 1*2*3*4*5  = 120

// function factorial(number) {
//   if (number <= 0) {
//     alert("Invalid Number");
//   } else if (number === 1) {
//     alert("Your factorial is 1");
//   }

//   var sum = 1;
//   for (var i = 1; i <= number; i++) {
//     sum *= i;
//   }
//   return sum;
// }

// var result = factorial(5);
// console.log(result);

var text = `lORem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
var convertTextIntoArray = text.split(" ");
for (var i = 0; i < convertTextIntoArray.length; i++) {
  var item = convertTextIntoArray[i];
  var firstWord = item[0].toUpperCase();
  var remainingCharacters = item.slice(1).toLowerCase();
  convertTextIntoArray[i] = firstWord + remainingCharacters;
}

console.log(convertTextIntoArray.join(" "));

// var fruits = ["Apple", "Orange"];
// fruits[0] = "Mango";
// console.log(fruits);
