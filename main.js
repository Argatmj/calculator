let firstNum = null;
let secondNum = null;
let operator = null;
let numValid;
let flag = false;
let consec = false;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+7") + "e-7");
}

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    case "%":
      return num1 % num2;
  }
}

function reset(){
  firstNum = null;
  secondNum = null;
  operator = null;
  flag = false;
  consec = false;
  numValid = false;
}

const display = document.querySelector(".display");
const equal = document.querySelector("#equals");
const dot = document.querySelector("#dot");
const del = document.querySelector("#del");
const clear = document.querySelector("#clr");
const numBtns = document.querySelectorAll(".num");
const opsBtns = document.querySelectorAll(".ops");

del.addEventListener("click", () => {
  let text = display.textContent;
  if (text.length > 0) {
    display.textContent = text.slice(0, -1);
  }
  consec = false;
});

clear.addEventListener("click", () => {
  display.innerHTML = "";
  reset();
});

equal.addEventListener("click", () => {
  secondNum = parseFloat(display.innerHTML);
  if (operator === "÷" && secondNum === 0) {
    display.innerHTML = "Nice try!";
  } else {
    let result = operate(firstNum, operator, secondNum);
    if (result !== undefined && !isNaN(result) && numValid) {
      display.innerHTML = roundToTwo(result);
    }
  }
  reset();
});

opsBtns.forEach((op) => op.addEventListener("click", (event) => {
    if (consec) {
        operator = event.target.innerHTML;
      } else {
        if (firstNum === null) {
          firstNum = parseFloat(display.innerHTML);
        } else if (operator !== null) {
          secondNum = parseFloat(display.innerHTML);
          firstNum = operate(firstNum, operator, secondNum);
          display.innerHTML = roundToTwo(firstNum);
        }
        operator = event.target.innerHTML;
        flag = true;
        consec = true;
      }
  })
);

dot.addEventListener("click", (event) => {
  let text = display.innerHTML;
  if (!text.includes(".")) {
    display.innerHTML = text.concat(`${event.target.innerHTML}`);
  }
  consec = false;
});

numBtns.forEach((button) =>
  button.addEventListener("click", (event) => {
    if (firstNum !== null && operator !== null) numValid = true;
    let text = display.innerHTML;
    if (flag || isNaN(text)) {
      text = "";
      flag = false;
    }
    consec = false;
    display.innerHTML = text.concat(`${event.target.innerHTML}`);
  })
);
