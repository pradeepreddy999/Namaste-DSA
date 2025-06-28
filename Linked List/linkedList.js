class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

const list = new MyLinkedList();

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

list.head = node1;
list.size = 3;

let current = list.head;
while (current) {
  console.log(current.val);
  current = current.next;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

let MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  if (this.head === null) this.head = newNode;
  else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  let curr = this.head;

  if (curr === null) this.head = newNode;
  else {
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) this.addAtHead(val);
  else if (index === this.size) this.addAtTail(val);
  else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};
