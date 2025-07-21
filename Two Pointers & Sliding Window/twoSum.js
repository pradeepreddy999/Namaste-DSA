// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// time complexity O(n * n), space complexity O(1)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const twoSum2 = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const minus = target - nums[i];
    if (map[minus] && map[minus] !== i) return [i, map[minus]];
  }
};

const twoSum3 = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map.has(val)) return [map.get(val), i];
    map.set(nums[i], i);
  }
  return [];
};
