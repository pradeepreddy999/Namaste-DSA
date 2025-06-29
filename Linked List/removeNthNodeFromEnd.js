// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// time complexity O(n) and space complexity O(1)
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
