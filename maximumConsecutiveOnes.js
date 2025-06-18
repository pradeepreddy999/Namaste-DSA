// Given a binary array nums, return the maximum number of consecutive 1’s in the array.

const maximumConsecutiveOnes = (nums) => {
  let max = 0,
    currentTimes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentTimes++;
      if (i === nums.length - 1 && currentTimes > max) max = currentTimes;
    } else {
      if (currentTimes > max) max = currentTimes;
      currentTimes = 0;
    }
  }
  return max;
};

// console.log(
//   maximumConsecutiveOnes([
//     0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
//   ])
// );
// console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1]));

const maximumConsecutiveOnes2 = (nums) => {
  let max = 0,
    currentTimes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentTimes++;
    } else {
      max = Math.max(currentTimes, max);
      currentTimes = 0;
    }
  }

  return Math.max(currentTimes, max);
};

console.log(
  maximumConsecutiveOnes2([
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  ])
);
console.log(maximumConsecutiveOnes2([1, 1, 0, 1, 1, 1]));
