var countdownElement = document.getElementById("countdown");

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function () {
  initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
  countdownElement.innerHTML = initialCountdownVal;
  countdownElement.style.fontSize = initialCountdownVal * 100 + "px";

  console.log(initialCountdownVal * 100 + "px");
}, 1000);
