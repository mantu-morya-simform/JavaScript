function evaluateExpression(expr) {
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
  let values = [];
  let operators = [];

  function applyOp() {
    let a = values.pop();
    let b = values.pop();
    let op = operators.pop();
    if (op === "+") values.push(a + b);
    if (op === "-") values.push(a - b);
    if (op === "*") values.push(a * b);
    if (op === "/") values.push(a / b);
  }

  for (let i = 0; i < expr.length; i++) {
    let ch = expr[i];

    if (!isNaN(expr[i])) {
      let num = "";
      while (i < expr.length && !isNaN(expr[i])) {
        num += expr[i];
        i++;
      }
      i--;
      values.push(Number(num));
    } else if (ch in precedence) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[ch]
      ) {
        applyOp();
      }
      operators.push(ch);
    }
  }
  while (operators.length) applyOp();
  return values.pop();
}

console.log(evaluateExpression("124+2+3*4")); // 15
// console.log(evaluateExpression("10+20*3")); // 70
// console.log(evaluateExpression("100/5+6")); // 26
