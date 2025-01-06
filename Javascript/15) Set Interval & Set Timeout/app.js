// setInterval
// setTimeout

// var count = 0;

// var myInterval = setInterval(timer, 5000);

// function timer() {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     clearInterval(myInterval);
//   }
// }

// for (var index = 0; index < 1000; index++) {
//   console.log("index", index);
// }

// var count = 0;
// var timeout = setTimeout(alarmOff, 1000);
// function alarmOff() {
//   count++;
//   clearTimeout(timeout)
//   console.log(count);
// }

var element = document.getElementById("clock");
function clock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  element.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(clock, 1000);
clock(); 

// document.write("Time is " + hours + " : " + minutes + " : " + seconds);
