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
  }
}

const display = document.querySelector(".display");
const equal = document.querySelector("#equals")
const del = document.querySelector("#del");
const clear = document.querySelector("#clr");
const numBtns = document.querySelectorAll(".num");
const opsBtns = document.querySelectorAll(".ops");

del.addEventListener("click",() => {
    let text = display.textContent;
    if (text.length > 0) {
        display.textContent = text.slice(0, -1); 
    }
});

clear.addEventListener("click",() => {
    display.innerHTML = '';
    firstNum = null;
    secondNum = null;
    operator = null;
    flag = false;
})

equal.addEventListener("click", () => {
    secondNum = parseFloat(display.innerHTML);
    console.log(firstNum);
    console.log(secondNum);
    console.log(operator);
    let result = operate(firstNum,operator,secondNum);
    display.innerHTML = result;
    firstNum = null;
    secondNum = null;
    operator = null;
    count = 0;
});

opsBtns.forEach((op) => op.addEventListener("click", (event) => {
    if(count !== 1){
        firstNum = parseFloat(display.innerHTML);
    }else{
        secondNum = parseFloat(display.innerHTML);
        firstNum = operate(firstNum,operator,secondNum);
        secondNum = null;
        count = 0;
    }
    operator = event.target.innerHTML;
    flag = true;
    count++;
}));

numBtns.forEach((button) => button.addEventListener("click", (event) => {
    let text = display.innerHTML;
    if(flag){
        text = '';
        flag = false;
    }
    display.innerHTML = text.concat(`${event.target.innerHTML}`); 
}));
