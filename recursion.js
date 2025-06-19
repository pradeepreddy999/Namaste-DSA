// Sum of first n numbers
const sum = (n) => {
  if (n === 0) return 0;
  return n + sum(n - 1);
};

// console.log(sum(5));
// console.log(sum(10));

// sum of all elements of an array
const sumOfArrayElements = (nums) => {
  if (nums.length === 1) return nums[0];
  return nums[0] + sumOfArrayElements(nums.slice(1));
};

// console.log(sumOfArrayElements([5, 3, 2, 4, 1]));

// sum of all odd elements of an array
const sumOfArrayOddElements = (nums) => {
  if (nums.length === 1) return nums[0] % 2 === 1 ? nums[0] : 0;

  return nums[0] % 2 === 1
    ? nums[0] + sumOfArrayOddElements(nums.slice(1))
    : sumOfArrayOddElements(nums.slice(1));
};

// console.log(sumOfArrayOddElements([5, 3, 2, 4, 1]));
// console.log(sumOfArrayOddElements([5, 3, 7, 9, 1]));

// factorial of a number
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

// check if the given number is power of 2 (n = 2^x)

//Any power of two has exactly one bit set in its binary representation.
// For example, 8 is 1000 and 16 is 10000. If you subtract 1 from such numbers,
// all bits to the right of the set bit become 1, and a bitwise AND will result in zero.

const isPowerOf2 = (n) => {
  return n > 0 && (n & (n - 1)) === 0;
};

// using logbase2
// const isPowerOf2 = (n) => {
//   const lognbase2 = Math.log2(n);
//   return n > 0 && Math.floor(lognbase2) === lognbase2;
// };

// using recursion
// const isPowerOf2 = (n) => {
//   if (n === 1) return true;
//   else if (n < 1 || n % 2 !== 0) return false;
//   return isPowerOf2(n / 2);
// };

console.log(isPowerOf2(7));
console.log(isPowerOf2(8));
console.log(isPowerOf2(0));
console.log(isPowerOf2(1));
console.log(isPowerOf2(2));
