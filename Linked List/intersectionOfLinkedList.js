// Given the heads of two singly linked-lists headA and headB,
// return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

const getIntersectionNode = (headA, headB) => {
  // put all the nodes of headA in a set.
  let curr = headA,
    hash = new Set();
  while (curr) {
    hash.add(curr);
    curr = curr.next;
  }

  // search for each node of headB in set create above.
  curr = headB;
  while (curr) {
    if (hash.has(curr)) return curr;

    curr = curr.next;
  }
  return null;
};
