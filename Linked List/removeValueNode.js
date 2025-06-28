// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has Node.val == val,
// and return the new head.

// sentinel node - a watch dog of head node (which can be helpful to remove nodes at first)
var removeElements = function (head, val) {
  let sentinelNode = new ListNode();
  sentinelNode.next = head;
  let prev = sentinelNode;

  while (prev && prev.next) {
    if (prev.next.val === val) prev.next = prev.next.next;
    else prev = prev.next;
  }
  return sentinelNode.next;
};
