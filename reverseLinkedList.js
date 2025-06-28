// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

const reverseList = (head) => {
  let prev = null,
    curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head; // or return prev directly without assigning to head.
};
