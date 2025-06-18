// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

const missingNumber = (nums) => {
  const len = nums.length;
  const arraySum = nums.reduce((acc, curr) => acc + curr, 0);

  return (len * (len + 1)) / 2 - arraySum;
};

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));

const missingNumber2 = (nums) => {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
