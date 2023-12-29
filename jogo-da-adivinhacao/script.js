//Variáveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const styleBackground = document.querySelector("body")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let rangeNumber = document.querySelector("#valueNumber")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Função callback
function handleClick(event) {
  event.preventDefault() //Função que evita de uma função padrão própria de uma tag ser executada

  //pegando o valor da imput
  const inputNumber = document.querySelector("#valueNumber")

  if (inputNumber.value === "") {
    alert("Vazio ou não é um número válido")
    xAttempts == xAttempts
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()

      styleBackground.style.background =
        "linear-gradient(108deg, #c2e9fb 0%, #a1c4fd 100%)"

      document.querySelector(
        ".screenTwo h1"
      ).innerText = `Acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts++
  }
}

/*Impossibilitando de digitar números negativos ou maiores que 10 */
function limitNumber() {
  const teste = parseInt(rangeNumber.value, 10)

  if (isNaN(teste) || teste < 0) {
    rangeNumber.value = ""
  } else if (teste > 10) {
    rangeNumber.value = 10
  }
}

function handleResetClick() {
  toggleScreen()

  //Trocando a cor de fundo
  styleBackground.style.background =
    "linear-gradient(288deg, #c2e9fb 0%, #dedede 100%)"
  //Reiniciando a contagem e o número aleatorio
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

//Eventos
//Adicionando um evento quando clicar no botão de tentar
btnTry.addEventListener("click", handleClick)
btnReset.addEventListener("click", handleResetClick)
rangeNumber.addEventListener("input", limitNumber)
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screenOne.classList.contains("hide")) {
    handleResetClick()
  }
})
