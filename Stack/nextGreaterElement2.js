// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
// return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array,
// which means you could search circularly to find its next greater number.
// If it doesn't exist, return -1 for this number.

const nextGreaterElements = (nums) => {
  let arr = [...nums, ...nums];
  let stack = [];

  let n = arr.length;
  let result = Array(n).fill(-1);

  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= top) stack.pop();
      else {
        result[i] = top;
        break;
      }
    }
    stack.push(arr[i]);
  }

  return result.slice(0, nums.length);
};

const nextGreaterElements2 = (nums) => {
  let stack = [];
  const n = nums.length;
  let result = Array(n).fill(-1);

  stack.push(nums[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (top > nums[i % n]) {
        result[i % n] = top;
        break;
      } else stack.pop();
    }
    stack.push(nums[i % n]);
  }

  return result.slice(0, nums.length);
};
