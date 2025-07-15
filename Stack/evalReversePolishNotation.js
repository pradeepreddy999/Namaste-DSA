// You are given an array of strings tokens that represents an
// arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

const evalRPN = (tokens) => {
  let stack = [];

  for (let token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const op1 = stack.pop();
      const op2 = stack.pop();
      const result = Math.trunc(
        eval("(" + op2 + ")" + token + "(" + op1 + ")")
      );

      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return Number(stack.pop());
};

const evalRPN2 = (tokens) => {
  let stack = [];
  const map = {
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      const b = stack.pop();
      const a = stack.pop();
      const ans = map[tokens[i]](+a, +b);
      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};
