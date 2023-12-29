export const AlertNotNumber = {
  element: document.querySelector(".notNumber"),
  open() {
    AlertNotNumber.element.classList.add("error")
  },
  close() {
    AlertNotNumber.element.classList.remove("error")
  },
}
