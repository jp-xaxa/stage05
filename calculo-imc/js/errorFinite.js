export const AlertFinite = {
  element: document.querySelector(".notFinite"),
  open() {
    AlertFinite.element.classList.add("error")
  },
  close() {
    AlertFinite.element.classList.remove("error")
  },
}
