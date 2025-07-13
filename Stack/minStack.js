// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

var MinStack = function () {
  this.s = [];
  this.min = [];
};

MinStack.prototype.push = function (val) {
  this.s.push(val);

  if (this.min.length === 0) this.min.push(val);
  else {
    const minTop = this.min[this.min.length - 1];
    if (minTop > val) this.min.push(val);
    else this.min.push(minTop);
  }
};

MinStack.prototype.pop = function () {
  this.min.pop();
  return this.s.pop();
};

MinStack.prototype.top = function () {
  return this.s[this.s.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
