// You are given a sorted array consisting of only integers where every element appears exactly twice,
// except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

const singleNonDuplicate = (nums) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    // pair exists on left
    if (nums[m] === nums[m - 1]) {
      let leftCount = m - 1 - l;
      if (leftCount % 2 === 1) r = m - 2;
      else l = m + 1;
    }
    // pair exists on right
    else if (nums[m] === nums[m + 1]) {
      let leftCount = m - l;
      if (leftCount % 2 === 1) r = m - 1;
      else l = m + 2;
    } else {
      return nums[m];
    }
  }
};
