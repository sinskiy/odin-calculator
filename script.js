let a = "";
let operator = "";
let b = "";

const digits = document.querySelector("#digits");
digits.addEventListener("click", handleDigitsClick);
function handleDigitsClick(e) {
  if (isContainer(e.target)) return;

  if (!operator) {
    a += e.target.innerText;
  } else {
    b += e.target.innerText;
  }
  updateDisplayText();
}

const operators = document.querySelector("#operators");
operators.addEventListener("click", handleOperatorsClick);
function handleOperatorsClick(e) {
  if (isContainer(e.target)) return;

  operator = e.target.innerText;
  updateDisplayText();
}

const display = document.querySelector("#display");
function updateDisplayText() {
  display.innerText = `${a} ${operator} ${b}`;
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", handleClearButtonClick);
function handleClearButtonClick() {
  a = "";
  operator = "";
  b = "";
  updateDisplayText();
}

const operateButton = document.querySelector("#operate");
operateButton.addEventListener("click", handleOperateButtonClick);
function handleOperateButtonClick() {
  const result = operate(Number(a), operator, Number(b)).toString();

  a = result;
  operator = "";
  b = "";
  updateDisplayText();
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

function isContainer(element) {
  return element.id;
}
