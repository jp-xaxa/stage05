export function calculateIMC(weight, height) {
  return (Number(weight) / (Number(height) / 100) ** 2).toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value == ""
}

export function notFinite(value) {
  return value == "0"
}
