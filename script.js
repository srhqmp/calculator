let num1;
let num2;
let operator;
let display = "";
let memory = "";

const numberButtons = document.querySelectorAll(".number");
const displayDiv = document.querySelector(".current-display");

function add(x, y) {
  console.log("ADD");
  return x + y;
}

function subtract(x, y) {
  console.log("SUBTRACT");
  return x - y;
}

function multiply(x, y) {
  console.log(MULTIPLY);
  return x * y;
}

function divide(x, y) {
  console.log("DIVIDE");
  return x / y;
}

function operate(x, y, operation) {
  console.log("OPERATE");

  if (operation === "add") {
    return add(x, y);
  }
  if (operation === "subtract") {
    return subtract(x, y);
  }
  if (operation === "multiply") {
    return multiply(x, y);
  }
  if (operation === "divide") {
    return divide(x, y);
  }
}

function populateDisplay(val) {
  display = `${display}${val}`;
  displayDiv.textContent = display;
}

// event listener for numbers
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    populateDisplay(button.textContent);
  });
});
