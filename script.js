function evaluateAnswer(num1, num2, operand) {
  if (operand == "+") {
    answer = num1 + num2;
  } else if (operand == "-") {
    answer = num1 - num2;
  } else if (operand == "/") {
    answer = num1 / num2;
  } else {
    answer = num1 * num2;
  }
  input1 = answer;
}

const virtualCalc = document.querySelector(".js-virtual-calc");
const displaySelector = document.querySelector(".js-display");
const innerCalculatorSelector=document.querySelector('.js-inner-calculator')
displaySelector.textContent='Number goes here'
let input1 = "";
let input2 = "";
let operand = "";
let answer = "";
let currentlyEvaluating = "";
let isMoreThan2Number = false;

innerCalculatorSelector.addEventListener("click", (event) => {
  if (event.target.classList.contains("operator")) {
    if (input1 == "") {
      alert("First enter a number");
    } else {
      if (input2) {
        console.log("yello");
        evaluateAnswer(Number(input1), Number(input2), operand);
        input2 = "";
      }
      operand = event.target.textContent.trim();
      currentlyEvaluating += operand;
      console.log(currentlyEvaluating);
      displaySelector.textContent = currentlyEvaluating;
    }
  } else if (event.target.classList.contains("equals-to")) {
    console.log("=");
    if (input1 == "") {
      alert("Enter a number");
    } else {
      evaluateAnswer(Number(input1), Number(input2), operand);
      console.log(`answer: ${answer}`);
      displaySelector.textContent = input1;
      input1 = "";
      input2 = "";
      operand = undefined;
    }   
  } else if (event.target.classList.contains("clear")) {
    displaySelector.textContent='Number goes here'
    input1 = "";
    input2 = "";
    operand = "";
    currentlyEvaluating = "";
  } else {
    if (operand == "") {
      input1 += event.target.textContent.trim();
      console.log(`${input1}`);
      currentlyEvaluating += event.target.textContent.trim()
      console.log(currentlyEvaluating);
      displaySelector.textContent = currentlyEvaluating;
    } else {
      input2 += event.target.textContent.trim();
      currentlyEvaluating += event.target.textContent.trim();
      displaySelector.textContent = currentlyEvaluating;
    }
  }
});
