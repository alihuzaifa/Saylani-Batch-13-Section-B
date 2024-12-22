// var cities = ["KaraCHi", "lahore", "islamabad", "multan", "peshawar"];
// var userPrompt = prompt("Enter your city");

// var isCityAvailable = false;

// for (var i = 0; i < cities.length; i++) {
//   var item = cities[i].toLowerCase();
//   var query = userPrompt.toUpperCase();

//   if (item === query) {
//     isCityAvailable = true;
//     break;
//   }
// }

// if (isCityAvailable === true) {
//   console.log("It's one of the cleanest city");
// } else {
//   console.log("It's not the cleanest city");
// }

// var text = "A quick brown fox jumps over the lazy dog";
// // A
// //  q
// // qu
// for (var i = 0; i < text.length; i++) {
//   var item = text.slice(i, i + 2);
//   if (item === "  ") {
//     alert("Double Space Correct It");
//     break;
//   }
// }

var text =
  "The impact of World War II on global politics is still felt today. World War II reshaped the economies and governments of many countries. After World War II, new international organizations were formed to prevent future conflicts. The legacy of World War II continues to influence modern warfare strategies. It is important to understand the causes of World War II to prevent similar events in the future. Many historians agree that the aftermath of World War II changed the course of history forever.";

//   World War II => Second World War

for (var i = 0; i < text.length; i++) {
  var item = text.slice(i, i + 12);
  if (item === "World War II") {
    text = text.slice(0, i) + "Second World War" + text.slice(i + 12);
  }
}

console.log(text);
