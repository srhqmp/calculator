let num1 = "";
let num2 = "";
let operator = "";

const displayDiv = document.querySelector(".current-display");
const memoryDiv = document.querySelector(".memory-display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear-button");
const equalButton = document.getElementById("equal-button");
const deleteButton = document.getElementById("delete-button");

function populateDisplay(value) {
  if (value.length > 9) {
    value = value.slice(0, 9);
  }
  displayDiv.textContent = value;
}

function clearDisplay() {
  num2 = "";
  num1 = "";
  operator = "";
  populateDisplay("0");
  memoryDiv.textContent = "";
}

function deleteLastDigit() {
  num2 = num2.slice(0, -1);
  populateDisplay(num2 || "0");
}

function appendNumber(number) {
  if (num2.length >= 9) return;
  if (number === "." && num2.includes(".")) return;
  num2 += number;
  populateDisplay(num2);
}

function chooseOperator(op) {
  if (num2 === "") return;
  if (num1 !== "") {
    operate();
  }
  operator = op;
  num1 = num2;
  num2 = "";
  memoryDiv.textContent = `${num1} ${operator}`;
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate() {
  let result;
  const x = parseFloat(num1);
  const y = parseFloat(num2);

  if (isNaN(x) || isNaN(y)) return;

  if (operator === "/" && y === 0) {
    num2 = "ERROR";
  } else {
    switch (operator) {
      case "+":
        result = add(x, y);
        break;
      case "-":
        result = subtract(x, y);
        break;
      case "x":
        result = multiply(x, y);
        break;
      case "/":
        result = divide(x, y);
        break;
      default:
        return;
    }

    num2 = result.toFixed(6).toString();
    num2 = parseFloat(num2).toString(); // remove trailing zeros
  }

  if (num2.length > 9) {
    num2 = num2.slice(0, 9); // restrict display to 9 characters
  }

  operator = "";
  num1 = "";
  populateDisplay(num2);
  memoryDiv.textContent = "";
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperator(button.textContent);
  });
});
clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteLastDigit);
equalButton.addEventListener("click", operate);
