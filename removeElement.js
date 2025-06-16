// Given an integer array nums and an integer val,
// remove all occurrences of val in-place. The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k. To get accepted, you need to:

// Modify nums such that the first k elements contain elements not equal to val.
// The remaining elements beyond k do not matter.
// Return k.

const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
