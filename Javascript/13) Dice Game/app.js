var container = document.getElementById("dice-container");

function game() {
  var randomNumber = Math.ceil(Math.random() * 6);
  if (randomNumber === 1) {
    container.innerHTML = `<div class="dice dice-1 animate__animated animate__flip">
        <span class="dot center"></span>
      </div>`;
  } else if (randomNumber === 2) {
    container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (randomNumber === 3) {
    container.innerHTML = `<div class="dice dice-3 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot center"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (randomNumber === 4) {
    container.innerHTML = `<div class="dice dice-4 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (randomNumber === 5) {
    container.innerHTML = `<div class="dice dice-5 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot center"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (randomNumber === 6) {
    container.innerHTML = `<div class="dice dice-6 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot middle-left"></span>
        <span class="dot middle-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  }
}
