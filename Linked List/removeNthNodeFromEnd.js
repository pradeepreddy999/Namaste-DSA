// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// time complexity O(n) and space complexity O(1)
// happens in two pass
const removeNthFromEnd = (head, n) => {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;

  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;

  for (let i = 0; i < prevPos; i++) prev = prev.next;

  prev.next = prev.next.next;
  return sentinel.next;
};

// better approach
// two pointer approach

// time complexity O(n) and space complexity O(1)
// still this happens in one pass unlike above which happens in two pass.
const removeNthFromEnd2 = (head, n) => {
  // add a sentinel (dummy) node at start
  let sentinel = new ListNode();
  sentinel.next = head;

  let second = sentinel;
  let first = sentinel;
  // move the first pointer n steps ahead
  for (let i = 0; i < n; i++) first = first.next;

  // move both pointers until first reaches last node
  while (first.next) {
    second = second.next;
    first = first.next;
  }

  //delete node next to second
  second.next = second.next.next;

  return sentinel.next;
};
