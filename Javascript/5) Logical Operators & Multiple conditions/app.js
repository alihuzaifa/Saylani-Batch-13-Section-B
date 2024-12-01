// function integerIdentity(number) {
//     if (number > 0) {
//         return "Positive"
//     } else {
//         if (number === 0) {
//             return "Zero"
//         } else {
//             return "Negative"
//         }
//     }
// }

// var userNumber = +prompt("Enter a number")
// var result = integerIdentity(userNumber);
// console.log(result);



// var userPercentage = +prompt("Enter your percentage");
// if (userPercentage >= 85) {
//     console.log("A+");
// }
// else if (userPercentage >= 75) {
//     console.log("A");
// }
// else if (userPercentage >= 65) {
//     console.log("B");
// }
// else if (userPercentage >= 55) {
//     console.log("C");
// }
// else if (userPercentage >= 45) {
//     console.log("D");
// }

// else {
//     console.log("Fail");
// }



// var food = "Naan";
// if (food === "Roti") {
//     console.log("5 Roti")
// }
// else if (food === "Paratha") {
//     console.log("5 Paratha")
// }
// else if (food === "Naan") {
//     console.log("5 Naan")
// }
// else {
//     console.log("5 Chappati")
// }



// Logical Operators
// And &&
// OR ||

// var userAge = +prompt("Enter Your age");
// if (userAge >= 18 && userAge <= 25) {
//     console.log("Eligible for discount")
// } else {
//     console.log("Not eligible for discount")
// }


// var userAge = 10;
// var isPassAvailable = "no";

// if (userAge > 18 || isPassAvailable === "yes") {
//     console.log("Eligible")
// } else {
//     console.log("Not eligible")
// }


function calculator(number1, number2, sign) {
    if (sign === "+") {
        return number1 + number2
    } else if (sign === "-") {
        return number1 - number2
    } else if (sign === "*") {
        return number1 * number2
    } else if (sign === "/") {
        return number1 / number2
    } else if (sign === "%") {
        return number1 % number2
    } else {
        return "Invalid Sign"
    }

}

var userNumber1 = +prompt("Enter Number 1")
var userNumber2 = +prompt("Enter Number 2")
var sign = prompt("Enter Sign or operator")

var result = calculator(userNumber1, userNumber2, sign);
console.log(result)