
const colors = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
}

let intervalId = null;

colors.startBtn.addEventListener('click', onStartBtnClick);
colors.stopBtn.addEventListener('click', onStopBtnClick);


function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick(event) {
  event.preventDefault();
  intervalId = setInterval(() => {
      colors.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  colors.startBtn.disabled = true;
  colors.startBtn.removeEventListener('click', onStartBtnClick);
};

function onStopBtnClick(event) {
  event.preventDefault();
  clearInterval(intervalId);

  colors.startBtn.disabled = false;
  colors.startBtn.addEventListener('click', onStartBtnClick);
   
}