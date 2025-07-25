// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// 3 sum using 2 sum
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      twoSum(nums, i, res);
    }
  }
  return res;
};

const twoSum = function (arr, x, res) {
  let i = x + 1;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j] + arr[x];

    if (sum > 0) j--;
    else if (sum < 0) i++;
    else {
      res.push([arr[i], arr[j], arr[x]]);
      i++;
      j--;
      // Skip duplicates for the second element
      while (i < j && arr[i] === arr[i - 1]) i++;
    }
  }
};
