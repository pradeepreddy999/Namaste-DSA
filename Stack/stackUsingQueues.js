// Implement a last-in-first-out (LIFO) stack using only two queues.
// The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

// using two queues
var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;
  while (n > 1) {
    this.q2.push(this.q1.shift());
    n = this.q1.length;
  }

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return this.q2.shift();
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  while (n > 1) {
    this.q2.push(this.q1.shift());
    n = this.q1.length;
  }

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  temp = this.q2.shift();
  this.q1.push(temp);

  return temp;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

// using only one queue

var MyStack = function () {
  this.q = [];
};

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q.length;
  while (n > 1) {
    this.q.push(this.q.shift());
    n--;
  }
  return this.q.shift();
};

MyStack.prototype.top = function () {
  let n = this.q.length;
  while (n > 1) {
    this.q.push(this.q.shift());
    n--;
  }

  let temp = this.q.shift();
  this.q.push(temp);

  return temp;
};

MyStack.prototype.empty = function () {
  return this.q.length === 0;
};
