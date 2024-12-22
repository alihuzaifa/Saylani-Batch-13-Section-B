var text =
  "It's essential to repeat the steps when learning something new, so don't forget to repeat each action carefully. If you repeat the process over and over, you'll improve. Repeat your efforts until they become perfect, and repeat this cycle for the best results. Sometimes, when you repeat a mistake, it teaches you more than you expect. Repeat the process as needed, but always be mindful to repeat with intention.";

// console.log(text.lastIndexOf("intentionsgsjsgjs"));

// var count = 0;
// for (var i = 0; i < text.length; i++) {
//   var element = text.slice(i, i + 4);
//   if (element === "the ") {
//     var previousValue = text.slice(0, i);
//     var nextValue = text.slice(i + 4);
//     count++;
//     text = previousValue + "THE " + nextValue;
//   }
// }

// console.log(count);
// console.log(text);

// var count = 0;
// for (var i = 0; i < text.length; i++) {
//   var firstWordIndex = text.indexOf("the ");
//   var element = text.slice(i, i + 4);
//   if (element === "the ") {
//     count++;
//     text =
//       text.slice(0, firstWordIndex) + "THE " + text.slice(firstWordIndex + 4);
//   }
// }

// console.log(count);
// console.log(text);

// var updatedText = text.replace("the ", "THE ");
var updatedText = text.replace(/the /g, "THE ");
console.log(updatedText);
