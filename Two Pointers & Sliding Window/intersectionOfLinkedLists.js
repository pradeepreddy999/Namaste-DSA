// Given the heads of two singly linked-lists headA and headB,
// return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// time complexity O(n), space compelxity O(1)
const getIntersectionNode = (headA, headB) => {
  let pA = headA,
    pB = headB;
  let m = 0,
    n = 0;

  while (headA) {
    headA = headA.next;
    m++;
  }
  while (headB) {
    headB = headB.next;
    n++;
  }

  const diff = m - n;
  if (m > n) {
    while (m > n) {
      pA = pA.next;
      m--;
    }
  } else {
    while (n > m) {
      pB = pB.next;
      n--;
    }
  }

  while (pA && pB) {
    if (pA === pB) return pA;
    pA = pA.next;
    pB = pB.next;
  }

  return null;
};

const getIntersectionNode2 = (headA, headB) => {
  let pA = headA,
    pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
