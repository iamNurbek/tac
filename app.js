let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let isDarkMode = false;

// Timer functions
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  isDarkMode = !isDarkMode;
}

function startTimer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
}

function pauseTimer() {
  clearInterval(int);
}

function resetTimer() {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = '00 : 00 : 00 : 000';
}

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;
  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// Event listeners
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);
document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
