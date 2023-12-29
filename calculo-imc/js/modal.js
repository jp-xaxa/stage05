export const Modal = {
  screenResponse: document.querySelector(".modal"),
  messageResponse: document.querySelector(".exbit-modal"),
  closeResult: document.querySelector(".close-modal"),
  open() {
    Modal.screenResponse.classList.remove("hide")
  },
  close() {
    Modal.screenResponse.classList.add("hide")
  },
}

Modal.closeResult.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)
function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}