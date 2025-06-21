const bubbleSort = (nums) => {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swap using destructuring
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    // If no swaps occurred, array is sorted
    if (!swapped) break;
  }
  return nums;
};

console.log(bubbleSort([5, 2, 8, 1, 4]));
