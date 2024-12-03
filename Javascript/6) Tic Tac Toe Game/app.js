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

    if (count === 10) {
        reset();
        count = 1;
    }
}



function win() {
    if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {

    } else {

    }
}