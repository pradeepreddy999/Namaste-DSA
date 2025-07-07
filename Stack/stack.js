let stack = []; // an array with restricted access

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

stack.pop();
stack.pop();

console.log(stack);

stack.push(5);

console.log(stack[stack.length - 1]); // peek / top

// stack[1]; // invalid stack operation even though it works as it is an array
