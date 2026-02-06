// Typewriter effect for Hero text
document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.querySelector(".typewriter");
  const texts = typewriterEl.getAttribute("data-text").split("|");
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let deleting = false;
  const speed = 100;
  const pause = 1500;

  function type() {
    if (!deleting) {
      currentText = texts[index].substring(0, charIndex + 1);
      typewriterEl.textContent = currentText;
      charIndex++;
      if (charIndex === texts[index].length) {
        deleting = true;
        setTimeout(type, pause);
      } else {
        setTimeout(type, speed);
      }
    } else {
      currentText = texts[index].substring(0, charIndex - 1);
      typewriterEl.textContent = currentText;
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, speed);
      } else {
        setTimeout(type, speed / 2);
      }
    }
  }

  type();

  // Dark mode toggle
  const darkToggle = document.getElementById("darkToggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkToggle.textContent = "☀️";
      darkToggle.title = "Basculer en mode clair";
    } else {
      darkToggle.textContent = "🌙";
      darkToggle.title = "Basculer en mode sombre";
    }
  });
});
