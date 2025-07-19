// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]]
// 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

const findMin = (nums) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    // searching space is already sorted.
    if (nums[l] <= nums[r]) return nums[l];

    const m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m - 1]) return nums[m];

    // left half is non sorted
    if (nums[l] > nums[m]) r = m - 1;
    else l = m + 1;
  }
};
