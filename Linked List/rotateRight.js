// Given the head of a linked list, rotate the list to the right by k places.

const rotateRight = (head, k) => {
  if (!head || !head.next || k === 0) return head;

  let length = 0;
  let tail = head;
  while (tail) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  let s = (f = head);
  for (let i = 0; i < k; i++) f = f.next;

  while (f.next) {
    s = s.next;
    f = f.next;
  }

  f.next = head;
  head = s.next;
  s.next = null;

  return head;
};
