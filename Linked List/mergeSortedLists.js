// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (!list1) curr.next = list2;
  else curr.next = list1;

  return dummy.next;
};
