let num = "";
let arr = [];
let isFisrtNumber = true;
const display = document.getElementById("disp");

function refreshDisplay() {
  display.value = " ";
  for (i = 0; i < arr.length; i++) {
    display.value += arr[i];
  }
}

function evaluateMath(expresionArr) {
  const mathExp = expresionArr.join("");
  const result = eval(mathExp);
  return result;
}

function handleNumber(val) {
  num += val;
  arr.push(val);
  refreshDisplay();
}

function handleOperator(operator) {
  if (num === "") return;
  arr.push(operator);
  isFisrtNumber = false;
  num = "";
  refreshDisplay();
}

function handleResult() {
  if (num === "") return;
  if (isFisrtNumber === true) return;
  num = "";
  const result = evaluateMath(arr);
  arr.push("=");
  arr.push(result);
  refreshDisplay();
  arr = "";
}

function handleClear() {
  arr = [];
  num = "";
  display.value = "";
  isFisrtNumber = true;
}
