var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");

// innerHTML
var count = 1;

function textShow() {
  var characterO = "O";
  var characterX = "X";

  if (count % 2 === 0) {
    return characterO;
  } else {
    return characterX;
  }
}

function reset() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  count = 1;
}

function game(number) {
  var text = textShow();
  if (number === 1 && box1.innerHTML === "") {
    box1.innerHTML = text;
    count++;
  } else if (number === 2 && box2.innerHTML === "") {
    box2.innerHTML = text;
    count++;
  } else if (number === 3 && box3.innerHTML === "") {
    box3.innerHTML = text;
    count++;
  } else if (number === 4 && box4.innerHTML === "") {
    box4.innerHTML = text;
    count++;
  } else if (number === 5 && box5.innerHTML === "") {
    box5.innerHTML = text;
    count++;
  } else if (number === 6 && box6.innerHTML === "") {
    box6.innerHTML = text;
    count++;
  } else if (number === 7 && box7.innerHTML === "") {
    box7.innerHTML = text;
    count++;
  } else if (number === 8 && box8.innerHTML === "") {
    box8.innerHTML = text;
    count++;
  } else if (number === 9 && box9.innerHTML === "") {
    box9.innerHTML = text;
    count++;
  }

  // Win
  win();

  // Reset
  if (count === 10) {
    reset();
  }
}

function messagePopup() {
  if (count % 2 === 0) {
    alert("X Win");
  } else {
    alert("O Win");
  }
}

function win() {
  var container1 = box1.innerHTML;
  var container2 = box2.innerHTML;
  var container3 = box3.innerHTML;
  var container4 = box4.innerHTML;
  var container5 = box5.innerHTML;
  var container6 = box6.innerHTML;
  var container7 = box7.innerHTML;
  var container8 = box8.innerHTML;
  var container9 = box9.innerHTML;

  //   For O and X Both Condition
  if (
    (container1 === "O" && container2 === "O" && container3 === "O") ||
    (container1 === "X" && container2 === "X" && container3 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container4 === "O" && container5 === "O" && container6 === "O") ||
    (container4 === "X" && container5 === "X" && container6 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container7 === "O" && container8 === "O" && container9 === "O") ||
    (container7 === "X" && container8 === "X" && container9 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container1 === "O" && container4 === "O" && container7 === "O") ||
    (container1 === "X" && container4 === "X" && container7 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container2 === "O" && container5 === "O" && container8 === "O") ||
    (container2 === "X" && container5 === "X" && container8 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container3 === "O" && container6 === "O" && container9 === "O") ||
    (container3 === "X" && container6 === "X" && container9 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container3 === "O" && container5 === "O" && container7 === "O") ||
    (container3 === "X" && container5 === "X" && container7 === "X")
  ) {
    messagePopup();
    reset();
  } else if (
    (container1 === "O" && container5 === "O" && container9 === "O") ||
    (container1 === "X" && container5 === "X" && container9 === "X")
  ) {
    messagePopup();
    reset();
  }
}
