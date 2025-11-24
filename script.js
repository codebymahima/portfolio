const texts = ["Mahima", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typed-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 1000);
  } else {
    setTimeout(type, 150);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("typed-text").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 80);
  }
}
document.addEventListener("DOMContentLoaded", type);
