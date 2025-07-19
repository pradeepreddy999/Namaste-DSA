// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element,
// and return its index. If the array contains multiple peaks,
// return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.
// In other words, an element is always considered to be
// strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

const findPeakElement = (nums) => {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (nums[m] < nums[m + 1]) l = m + 1;
    else r = m;
  }
  return r;
};
