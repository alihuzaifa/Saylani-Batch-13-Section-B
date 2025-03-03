// Step 1 Elements Get
var board = document.querySelector(".board");
var highestScore = document.querySelector(".highest-score");
var score = document.querySelector(".score");

// Step 2 Variable Initialization
var snake = [{ x: 10, y: 10 }];
var direction = { x: 0, y: 0 };

var food = foodRandomPosition();
var currentScore = 0;
var hScore = localStorage.getItem("highest-score");
if (hScore) {
  highestScore.innerHTML = `Highest Score: ${hScore}`;
} else {
  highestScore.innerHTML = `Highest Score: 0`;
}

window.addEventListener("keydown", function (e) {
  const key = e.key;
  let newDirection;
  if (key === "ArrowUp") {
    newDirection = { x: 0, y: -1 };
  } else if (key === "ArrowDown") {
    newDirection = { x: 0, y: 1 };
  } else if (key === "ArrowLeft") {
    newDirection = { x: -1, y: 0 };
  } else if (key === "ArrowRight") {
    newDirection = { x: 1, y: 0 };
  }

  // If NewDirection valid hun then direction ko update kar dena
  if (
    newDirection &&
    (newDirection.x !== -direction.x || newDirection.y !== -direction.y)
  ) {
    direction = newDirection;
  }
});

function foodRandomPosition() {
  var xPosition = Math.floor(Math.random() * 18 + 1);
  var yPosition = Math.floor(Math.random() * 18 + 1);
  return {
    x: xPosition,
    y: yPosition,
  };
}

// Draw Elements
function drawElement(position, className) {
  // Position would be an object always
  var element = document.createElement("div");
  element.style.gridRowStart = position.y;
  element.style.gridColumnStart = position.x;
  element.classList.add(className);
  board.appendChild(element);
}

function drawGame() {
  board.innerHTML = "";
  drawElement(food, "food");

  for (var i = 0; i < snake.length; i++) {
    var item = snake[i];
    if (i === 0) {
      drawElement(item, "head");
    } else {
      drawElement(item, "tail");
    }
  }
}

function moveSnake() {
  var newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(newHead);
  if (newHead.x === food.x && newHead.y === food.y) {
    food = foodRandomPosition();
  } else {
    snake.pop();
  }
}

setInterval(function () {
  drawGame();
  moveSnake();
}, 200);
