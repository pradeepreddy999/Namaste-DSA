// Given the head of a singly linked list,
// return true if it is a palindrome or false otherwise.

const isPalindrome = (head) => {
  // finding the middle of linked list
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of linked list
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // comparing first half and second half of linked list
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
};
