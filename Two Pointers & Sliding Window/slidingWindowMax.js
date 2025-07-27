// You are given an array of integers nums,
// there is a sliding window of size k which is moving
// from the very left of the array to the very right.
// You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.

// Return the max sliding window.

// (brute force) --->  shouldn't use
const maxSlidingWindow = (nums, k) => {
  let result = [];
  let i = 0,
    j = k - 1;

  while (j < nums.length) {
    result.push(getMax(nums, i, j));
    i++;
    j++;
  }

  return result;
};

const getMax = function (arr, start, end) {
  let max = -Infinity;
  for (let i = start; i <= end; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};

// optimal approach
const maxSlidingWindow2 = (nums, k) => {
  let res = [];
  let q = [];

  let i = (j = 0);
  while (j < nums.length) {
    // push current element after removing all small elements from last.
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(nums[j]);

    // when window size is k
    if (j >= k - 1) {
      res.push(q[0]);
      // if the left most element for queue q[0] is equal to windows curr first element
      // then remove it
      if (nums[i] == q[0]) q.shift();
      ++i;
    }
    ++j;
  }
  return res;
};
