document.addEventListener("DOMContentLoaded", function () {
  const intros = document.querySelectorAll(".intro");
  let currentIndex = 0;

  function showNextIntro() {
    intros[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % intros.length;
    intros[currentIndex].classList.add("active");
  }

  setInterval(showNextIntro, 3000);
});
