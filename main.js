let firstNum;
let secondNum;
let operator;

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

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const calc = document.querySelector(".calc");
const res = document.querySelector(".result");
const del = document.querySelector("#del");
const clear = document.querySelector("#clr");
let buttons = document.querySelectorAll(".mod");

del.addEventListener("click",() => {
    let text = calc.textContent;
    if (text.length > 0) {
        calc.textContent = text.slice(0, -1); 
    }
});

clear.addEventListener("click",() => {
    res.innerHTML = '';
    calc.innerHTML = '';
})

buttons.forEach((button) => button.addEventListener("click", (event) => {
    let text = calc.innerHTML;
    calc.innerHTML = text.concat(`${event.target.innerHTML}`); 
}));

