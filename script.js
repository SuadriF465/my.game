
let score = 0;
let timeLeft = 30;
let timerInterval;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const gameOver = document.getElementById("game-over");
const scoreDisplay = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("game-area");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
  menu.classList.add("hidden");
  game.classList.remove("hidden");
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  createSquare();
  timerInterval = setInterval(updateTimer, 1000);
}

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");

  const maxX = gameArea.clientWidth - 50;
  const maxY = gameArea.clientHeight - 50;

  square.style.left = Math.floor(Math.random() * maxX) + "px";
  square.style.top = Math.floor(Math.random() * maxY) + "px";

  square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    square.remove();
    createSquare();
  });

  gameArea.innerHTML = ""; // удаляем предыдущий
  gameArea.appendChild(square);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function endGame() {
  game.classList.add("hidden");
  finalScore.textContent = score;
  gameOver.classList.remove("hidden");
}
