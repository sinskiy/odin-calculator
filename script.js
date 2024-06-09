let a = 0;
let operator;
let b = 0;

const display = document.querySelector("#display");
const digits = document.querySelectorAll("#digits button");

digits.forEach((digit) => digit.addEventListener("click", handleDigitClick));

let displayValue = "";
function handleDigitClick(e) {
  displayValue += e.target.innerText;
  display.innerText = displayValue;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return substract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
