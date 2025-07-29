const display = document.getElementById('display');
const box = document.getElementById('box');
let posX = 100, posY = 100;

function updateDisplay(text) {
  display.textContent = text;
}

document.addEventListener('keydown', (e) => {
  const step = 10;

  if (e.code === 'ArrowUp') posY -= step;
  if (e.code === 'ArrowDown') posY += step;
  if (e.code === 'ArrowLeft') posX -= step;
  if (e.code === 'ArrowRight') posX += step;

  if (e.code === 'Space') {
    box.style.backgroundColor = 'yellow';
    e.preventDefault(); 
  }

  box.style.top = posY + 'px';
  box.style.left = posX + 'px';
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    box.style.backgroundColor = 'red'; 
  }
});
