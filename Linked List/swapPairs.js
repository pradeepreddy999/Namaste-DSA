// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes
// (i.e., only nodes themselves may be changed.)

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const swapPairs = (head) => {
  if (!head || !head.next) return head;

  let dummy = (prev = new ListNode());
  dummy.next = head;

  let curr = dummy.next;
  let next = curr.next;

  while (curr && next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr?.next;
  }

  return dummy.next;
};

const swapPairs2 = (head) => {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }
  return dummy.next;
};

// recursive approach
const swapPairs3 = (head) => {
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  left.next = swapPairs3(right.next);
  right.next = left;
  return right;
};
