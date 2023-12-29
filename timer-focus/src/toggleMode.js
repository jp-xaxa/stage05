let darkMode = true
const buttonToggle = document.getElementById("mode-controls")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")
  const mode = darkMode ? "light" : "dark"
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode ativado!`
  darkMode = !darkMode
})
