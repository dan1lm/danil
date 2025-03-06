
const countdownTime = new Date().getTime() + 2000 * 60 * 60 * 1000; 

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownTime - now;

  if (timeLeft <= 0) {
    document.getElementById('timer').innerHTML = "We're back!";
    return;
  }

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('hours').innerText = String(Math.floor(hours)).padStart(2, '0');
  document.getElementById('minutes').innerText = String(Math.floor(minutes)).padStart(2, '0');
  document.getElementById('seconds').innerText = String(Math.floor(seconds)).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();