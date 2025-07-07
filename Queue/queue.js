let q = []; // with restricted access

q.push(1); // enqueue
q.push(2);
q.push(3);

console.log(q);

q.shift(); // dequeue

console.log(q);

console.log(q[0]); // peek/front

// q.pop(); // invalid operation of queue even though its an array
// q[1]; // invalid operation of queue even though its an array
