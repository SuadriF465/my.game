
const startBtn = document.getElementById('start-btn');
const instructionsBtn = document.getElementById('instructions-btn');
const backBtn = document.getElementById('back-btn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const instructions = document.getElementById('instructions');
const scoreEl = document.getElementById('score');
const recordEl = document.getElementById('record');
const timeEl = document.getElementById('time');
const square = document.getElementById('square');

let score = 0;
let record = localStorage.getItem('bestScore') || 0;
let time = 30;
let timerInterval;
let moveInterval;

recordEl.innerText = record;

startBtn.addEventListener('click', startGame);
instructionsBtn.addEventListener('click', showInstructions);
backBtn.addEventListener('click', backToMenu);

square.addEventListener('click', () => {
  score++;
  scoreEl.innerText = score;
  moveSquare();
});

function startGame() {
  menu.classList.add('hidden');
  instructions.classList.add('hidden');
  game.classList.remove('hidden');

  score = 0;
  time = 30;
  scoreEl.innerText = score;
  timeEl.innerText = time;

  moveSquare();

  moveInterval = setInterval(moveSquare, 800);
  timerInterval = setInterval(() => {
    time--;
    timeEl.innerText = time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

function moveSquare() {
  const size = 40 + Math.random() * 40;
  square.style.width = size + "px";
  square.style.height = size + "px";
  square.style.top = Math.random() * (window.innerHeight - size) + "px";
  square.style.left = Math.random() * (window.innerWidth - size) + "px";
}

function endGame() {
  clearInterval(timerInterval);
  clearInterval(moveInterval);
  square.style.top = "-100px";
  alert(`Игра окончена! Ваш результат: ${score}`);

  if (score > record) {
    record = score;
    localStorage.setItem('bestScore', record);
    recordEl.innerText = record;
    alert("🎉 Новый рекорд!");
  }

  backToMenu();
}

function showInstructions() {
  menu.classList.add('hidden');
  game.classList.add('hidden');
  instructions.classList.remove('hidden');
}

function backToMenu() {
  menu.classList.remove('hidden');
  game.classList.add('hidden');
  instructions.classList.add('hidden');
}
