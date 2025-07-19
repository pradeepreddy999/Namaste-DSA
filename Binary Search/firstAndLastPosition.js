// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

const searchRange = (nums, target) => {
  let l1 = 0,
    r1 = nums.length - 1,
    result = [-1, -1];

  // finding the left index

  while (l1 < r1) {
    const m = l1 + Math.floor((r1 - l1) / 2);

    if (nums[m] < target) l1 = m + 1;
    else r1 = m;
  }

  if (nums[l1] === target) result[0] = l1;

  let l2 = 0,
    r2 = nums.length - 1;

  // finding the right most index
  while (l2 < r2) {
    const m = l2 + Math.ceil((r2 - l2) / 2);

    if (nums[m] > target) r2 = m - 1;
    else l2 = m;
  }

  if (nums[l2] == target) result[1] = l2;

  return result;
};

const searchRange2 = (nums, target) => {
  let l1 = 0,
    r1 = nums.length - 1,
    result = [-1, -1];

  // finding the starting index
  while (l1 <= r1) {
    const m = l1 + Math.floor((r1 - l1) / 2);

    if (nums[m] === target) {
      result[0] = m;
      r1 = m - 1;
    }
    if (nums[m] < target) l1 = m + 1;
    else r1 = m - 1;
  }

  let l2 = 0,
    r2 = nums.length - 1;

  // finding the ending index
  while (l2 <= r2) {
    const m = l2 + Math.floor((r2 - l2) / 2);

    if (nums[m] === target) {
      result[1] = m;
      l2 = m + 1;
    }
    if (nums[m] > target) r2 = m - 1;
    else l2 = m + 1;
  }

  return result;
};
