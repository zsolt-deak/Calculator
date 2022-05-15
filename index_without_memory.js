//this JS file is not used, just kept as a previous 
//version, without the implemented display memory
// **************************************************

let num = '';
let arr = [];
const display = document.getElementById("disp");

function evaluateMath(expresionArr) {
  const mathExp = expresionArr.join('');
  const result = eval(mathExp);
  return result;
}

function handleNumber(val) {
  num += val;
  display.value = num;
}

function handleOperator(operator) {
  if (num === "") return;
  memory += operator;
  arr.push(num);
  arr.push(operator);
  num = "";
}

function handleResult() {
  arr.push(num);
  num = "";
  const result = evaluateMath(arr);
  display.value = result;
  arr = [];
}

function handleClear() {
  arr = [];
  num = '';
  display.value = '';
}
