// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.

// time complexity O(n) and space complexity O(n)
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

// better approach - floyd's algorithm (slow pointer and fast pointer will
// definitely meet at a point may be in the future if there is a cycle)

// Floyd’s Cycle Detection (Tortoise and Hare algorithm)
// slow and fast pointer approach

// time complexity O(n) and space complexity O(1)
var hasCycle2 = function (head) {
  if (!head) return false;

  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
