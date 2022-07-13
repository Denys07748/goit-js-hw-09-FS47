function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

stopBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', onChengeBgColor);
stopBtn.addEventListener('click', onStopChengeBgColor);

function onChengeBgColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
}

function onStopChengeBgColor() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
}
