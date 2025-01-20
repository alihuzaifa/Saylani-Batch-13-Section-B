var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

var sound1 = new Audio();
sound1.src = "music/music-2.mp3";

var sound2 = new Audio();
sound2.src = "music/music-3.mp3";

function firstSound() {
  sound2.pause();
  sound1.play();
}

function secondSound() {
  sound1.pause();
  sound2.play();
}
