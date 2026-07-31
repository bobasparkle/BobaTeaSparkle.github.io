/* Theme toggle */

const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "🌞"
    : "🌙";
});
/* ---------- FONT SIZE CONTROLS ---------- */

const content = document.querySelector(".chapter-content");

let currentSize = 1.08;

const increaseBtn = document.getElementById("increase-font");

const decreaseBtn = document.getElementById("decrease-font");

if (increaseBtn && decreaseBtn && content) {
  increaseBtn.addEventListener("click", () => {
    currentSize += 0.1;

    content.style.fontSize = currentSize + "rem";
  });

  decreaseBtn.addEventListener("click", () => {
    currentSize -= 0.1;

    content.style.fontSize = currentSize + "rem";
  });
}
