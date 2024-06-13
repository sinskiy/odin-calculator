let a = "";
let operator = "";
let b = "";

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", handleClearButtonClick);
function handleClearButtonClick() {
  a = "";
  operator = "";
  b = "";
  updateDisplayText();
}

const backButton = document.querySelector("#back");
backButton.addEventListener("click", handleBackButtonClick);
function handleBackButtonClick() {
  if (b) {
    b = b.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else {
    a = a.slice(0, -1);
  }
  updateDisplayText();
}

const digits = document.querySelector("#digits");
digits.addEventListener("click", handleDigitsClick);
function handleDigitsClick(e) {
  if (isContainer(e.target)) return;

  if (!operator) {
    a += e.target.innerText;
  } else {
    b += e.target.innerText;

    if (!b.includes(".")) {
      floatedButton.disabled = false;
    }
  }
  updateDisplayText();
}

const floatedButton = document.querySelector("#floated");
floatedButton.addEventListener("click", handleFloatedClick);
function handleFloatedClick(e) {
  if (a.includes(".") || b.includes(".")) return;
  if (!a || (a && operator && !b)) return;

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
  if (!a) return;

  operator = e.target.innerText;
  updateDisplayText();
}
const operateButton = document.querySelector("#operate");
operateButton.addEventListener("click", handleOperateButtonClick);
function handleOperateButtonClick() {
  if (!a || !operator || !b) return;

  let result = operate(Number(a), operator, Number(b)).toString();
  if (result.length > 7) {
    result = Number(result).toFixed(5);
  }

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

const display = document.querySelector("#display");
function updateDisplayText() {
  display.innerText = `${a} ${operator} ${b}`;
}

function isContainer(element) {
  return element.id || element.classList.length;
}
