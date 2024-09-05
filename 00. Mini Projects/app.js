console.log("JS Loaded");

var countdownElement = document.getElementById("countdown");

var countDownVal = countdownElement.innerHTML;

setInterval(function () {
  countdownElement.innerHTML = countDownVal - 1;
}, 1000);
