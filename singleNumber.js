// Given a non-empty array of integers nums, every element appears
// twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

const singleNumber = (nums) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else hash[nums[i]]++;
  }

  for (const key in hash) {
    if (hash.hasOwnProperty(key)) {
      if (hash[key] == 1) return key;
    }
  }
};

// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));

const singleNumber2 = (nums) => {
  return nums.reduce((acc, curr) => acc ^ curr, 0); // bit-wise or (or) XOR operation
};

console.log(singleNumber2([4, 1, 2, 1, 2]));
console.log(singleNumber2([1]));
