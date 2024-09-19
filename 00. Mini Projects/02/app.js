var countdownElement = document.getElementById("countdown");

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function () {
  initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
  countdownElement.innerHTML = initialCountdownVal;
  countdownElement.style.fontSize = "300px";
}, 1000);
