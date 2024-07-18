let firstNum = null;
let secondNum = null;
let operator = null;
let flag = false;
let count = 0;

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
  count = 0;
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
    if (result !== undefined && !isNaN(result)) {
      display.innerHTML = roundToTwo(result);
    }
  }
  reset();
});

opsBtns.forEach((op) => op.addEventListener("click", (event) => {
    if (count !== 1) {
        firstNum = parseFloat(display.innerHTML);
    } else{
     secondNum = parseFloat(display.innerHTML);
     firstNum = operate(firstNum, operator, secondNum);
     display.innerHTML = roundToTwo(firstNum);
     secondNum = null;
     count = 0;
    }
    operator = event.target.innerHTML;
    flag = true;
    count++;
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
    let text = display.innerHTML;
    if (flag || isNaN(text)) {
      text = "";
      flag = false;
    }
    consec = false;
    display.innerHTML = text.concat(`${event.target.innerHTML}`);
  })
);
