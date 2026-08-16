/* Theme toggle */

const toggleBtn = document.getElementById("toggle-mode");

/* Remember the user's theme */

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

/* Update the button */

if (toggleBtn) {
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "🌞"
    : "🌙";

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌞";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
}

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
