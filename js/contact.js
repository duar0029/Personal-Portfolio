document.addEventListener("DOMContentLoaded", init);

const phrases = ["Sammy", "Coding", "Developing", "Designing", "Committed"];
const autoTypeElement = document.querySelector(".auto-type");
let index = 0;

function updateText() {
  autoTypeElement.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}

function animateText() {
  setInterval(updateText, 3000);
}

animateText();
