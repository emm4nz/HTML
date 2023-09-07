const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log",
);
const applyAnimation = document.querySelector(
  ".animation-example>button.activate",
);

animation.addEventListener("animationstart", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "Activate animation";
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "Cancel animation"
    : "Activate animation";
});
