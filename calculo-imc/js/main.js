import { Modal } from "./modal.js"
import { AlertNotNumber } from "./error-not-number.js"
import { AlertFinite } from "./errorFinite.js"
import { calculateIMC, notNumber, notFinite } from "./functions.js"

// variáveis
const form = document.querySelector("form")
const weightInput = document.querySelector("#value-weight")
const heightInput = document.querySelector("#value-height")

form.onsubmit = (event) => {
  event.preventDefault()

  //Converter o caracter , em .
  let convertCharacterTheWeight = weightInput.value.replace(
    new RegExp(",", "g"),
    "."
  )

  const height = heightInput.value
  const weight = convertCharacterTheWeight

  if (notNumber(weight) || notNumber(height)) {
    AlertFinite.close()
    AlertNotNumber.open()
    return
  } else if (notFinite(height)) {
    AlertNotNumber.close()
    AlertFinite.open()
    return
  }

  const result = calculateIMC(weight, height)
  displayMesssageResult(result)
}

weightInput.addEventListener("input", (event) => {
  AlertNotNumber.close()
  AlertFinite.close()
})

heightInput.addEventListener("input", (event) => {
  AlertNotNumber.close()
  AlertFinite.close()
})

function displayMesssageResult(result) {
  Modal.messageResponse.innerHTML = `Seu IMC é de ${result}`
  Modal.open()

  weightInput.value = ""
  heightInput.value = ""
}
