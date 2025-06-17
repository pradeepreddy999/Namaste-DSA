// Given an integer array nums, move all 0’s to the end of it
// while maintaining the relative order of the non-zero elements.

// Note: You must do this in-place without making a copy of the array.

// Time and Space Complexity
// Time Complexity: O(n)

// One pass to shift non-zero elements.
// Another pass to fill in zeros.
// Space Complexity: O(1)

// In-place modifications with constant extra space.

const moveZeros = (nums) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill all remaining elements to 0
  for (let j = x; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0]));
