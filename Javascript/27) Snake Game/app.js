// // Step 1 Elements Get
// var board = document.querySelector(".board");
// var highestScore = document.querySelector(".highest-score");
// var score = document.querySelector(".score");

// // Step 2 Variable Initialization
// var snake = [{ x: 10, y: 10 }];
// var direction = { x: 0, y: 0 };

// var food = foodRandomPosition();
// var currentScore = 0;
// var hScore = localStorage.getItem("highest-score");
// score.innerHTML = `Score ${currentScore}`;

// if (hScore) {
//   highestScore.innerHTML = `Highest Score: ${hScore}`;
// } else {
//   highestScore.innerHTML = `Highest Score: 0`;
// }

// window.addEventListener("keydown", function (e) {
//   const key = e.key;
//   let newDirection;
//   if (key === "ArrowUp") {
//     newDirection = { x: 0, y: -1 };
//   } else if (key === "ArrowDown") {
//     newDirection = { x: 0, y: 1 };
//   } else if (key === "ArrowLeft") {
//     newDirection = { x: -1, y: 0 };
//   } else if (key === "ArrowRight") {
//     newDirection = { x: 1, y: 0 };
//   }

//   // If NewDirection valid hun then direction ko update kar dena
//   if (
//     newDirection &&
//     (newDirection.x !== -direction.x || newDirection.y !== -direction.y)
//   ) {
//     direction = newDirection;
//   }
// });

// function foodRandomPosition() {
//   var xPosition = Math.floor(Math.random() * 18 + 1);
//   var yPosition = Math.floor(Math.random() * 18 + 1);
//   return {
//     x: xPosition,
//     y: yPosition,
//   };
// }

// // Draw Elements
// function drawElement(position, className) {
//   // Position would be an object always
//   var element = document.createElement("div");
//   element.style.gridRowStart = position.y;
//   element.style.gridColumnStart = position.x;
//   element.classList.add(className);
//   board.appendChild(element);
// }

// function drawGame() {
//   board.innerHTML = "";
//   drawElement(food, "food");

//   for (var i = 0; i < snake.length; i++) {
//     var item = snake[i];
//     if (i === 0) {
//       drawElement(item, "head");
//     } else {
//       drawElement(item, "tail");
//     }
//   }
// }

// function moveSnake() {
//   var newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
//   snake.unshift(newHead);

//   // If Food eaten
//   if (newHead.x === food.x && newHead.y === food.y) {
//     updateScore();
//     food = foodRandomPosition();
//   } else {
//     snake.pop();
//   }
// }

// function resetGame() {
//   alert("Game is Over");
//   snake = [{ x: 10, y: 10 }];
//   direction = { x: 0, y: 0 };
//   food = foodRandomPosition();
//   console.log(hScore);
//   var currentHighestScore = localStorage.getItem("highest-score") || 0;
//   if (currentScore > currentHighestScore) {
//     localStorage.setItem("highest-score", hScore);
//   }

//   currentScore = 0;
//   // For Current Score
//   score.innerHTML = `Score ${currentScore}`;
// }

// function checkGameOver() {
//   var head = snake[0];

//   // If Snake collide to wall
//   if (head.x < 1 || head.x > 18 || head.y < 1 || head.y > 18) {
//     return resetGame();
//   }

//   // If Snake collide to itself
//   for (var i = 1; i < snake.length; i++) {
//     var item = snake[i];
//     if (head.x === item.x && head.y === item.y) {
//       return resetGame();
//     }
//   }
// }

// function updateScore() {
//   currentScore++;

//   // For Current Score
//   score.innerHTML = `Score ${currentScore}`;

//   // For Highest Score
//   if (currentScore > hScore) {
//     hScore = currentScore;
//     highestScore.innerHTML = `Highest Score: ${hScore}`;
//   }
// }

// setInterval(function () {
//   drawGame();
//   checkGameOver();
//   moveSnake();
// }, 200);

// Get HTML elements
// Variables
// DrawElement or DrawGame function
// food Random Position
// Move Snake
// Game Over Conditions
// SetInterval For continuously creating a new board

// Important
// Jaise hi hum Arrow Key press karte hain, direction update ho jata hai.
// setInterval() function har 200ms baad moveSnake() ko call karta rehta hai.
// moveSnake() function snake ki new position calculate karta hai:
// Naya head pichli position + direction ke mutabiq set hota hai.
// Snake continuously move karta rehta hai jab tak koi naya arrow press na ho.

// Step 1 Elements Get
var board = document.querySelector(".board");
var highestScore = document.querySelector(".highest-score");
var score = document.querySelector(".score");

var initialSnakeHead = snakeHeadRandomPosition();
var snake = [initialSnakeHead];
var direction = { x: 0, y: 0 };
var food = foodRandomPosition();
var currentScore = 0;
var hScore = localStorage.getItem("highest-score");

score.innerHTML = `Score ${currentScore}`;

if (hScore) {
  highestScore.innerHTML = `Highest Score ${hScore}`;
} else {
  highestScore.innerHTML = `Highest Score 0`;
}

function foodRandomPosition() {
  // 0.1 * 18 === 0.188 === 0
  var randomXPosition = Math.floor(Math.random() * 18 + 1);
  var randomYPosition = Math.floor(Math.random() * 18 + 1);
  return {
    x: randomXPosition,
    y: randomYPosition,
  };
}

function snakeHeadRandomPosition() {
  // 0.1 * 18 === 0.188 === 0
  var randomXPosition = Math.floor(Math.random() * 18 + 1);
  var randomYPosition = Math.floor(Math.random() * 18 + 1);
  return {
    x: randomXPosition,
    y: randomYPosition,
  };
}

// position = { x: 10 ,y: 8 }
function drawElement(position, className) {
  var element = document.createElement("div");
  element.style.gridRowStart = position.y;
  element.style.gridColumnStart = position.x;
  element.classList.add(className);
  board.appendChild(element);
}

function drawGame() {
  board.innerHTML = "";

  // Food Draw
  drawElement(food, "food");

  // Snake Draw
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
  // 10 , 9
  var newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(newHead);

  // Food is eaten
  var snakeHead = snake[0];
  if (snakeHead.x === food.x && snakeHead.y === food.y) {
    food = foodRandomPosition();
  } else {
    snake.pop();
  }
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

  if (newDirection) {
    if (newDirection.x !== -direction.x || newDirection.y !== -direction.y) {
      direction = newDirection;
    }
  }
});

setInterval(function () {
  drawGame();
  moveSnake();
}, 200);
