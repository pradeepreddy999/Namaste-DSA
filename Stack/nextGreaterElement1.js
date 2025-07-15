// The next greater element of
// some element x in an array is the first greater element
// that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2,
// where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
// and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length
// such that ans[i] is the next greater element as described above.

// brute force
// time complexity O(n * n) and space complexity O(n)
const nextGreaterElement = (nums1, nums2) => {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let max = Infinity;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        max = nums2[j];
      } else if (nums2[j] > max) {
        max = nums2[j];
        break;
      }
    }
    result.push(nums1[i] === max ? -1 : max);
  }

  return result;
};

// time complexity O(n + m), space complexity O(n + m) -> n for object m for map return

const nextGreaterElement2 = (nums1, nums2) => {
  let ngeMap = {};
  let stack = [];
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngeMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      // here this while loop only runs till it find the greater element and
      // each push and pop is done at most once it is constant time
      if (stack[stack.length - 1] < nums2[i]) {
        stack.pop();
      } else {
        ngeMap[nums2[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) ngeMap[nums2[i]] = -1;

    stack.push(nums2[i]);
  }

  return nums1.map((x) => ngeMap[x]);
};
