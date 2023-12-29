const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const openCookie = document.querySelector("#open-cookie")
const newCookie = document.querySelector("#new-cookie")

function appearMessage() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function newMessage() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

openCookie.addEventListener("click", appearMessage)
newCookie.addEventListener("click", newMessage)
