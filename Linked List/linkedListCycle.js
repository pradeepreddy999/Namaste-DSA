// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.

var hasCycle = function (head) {
  let curr = head;
  let hash = new Set();
  while (curr) {
    if (hash.has(curr)) return true;
    hash.add(curr);
    curr = curr.next;
  }
  return false;
};
