// You are given a string num, representing a large integer.
// Return the largest-valued odd integer (as a string)
// that is a non-empty substring of num,
// or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

const largestOddNumber = (num) => {
  let i = num.length - 1;
  while (i >= 0) {
    if (parseInt(num[i]) % 2 === 1) break;
    i--;
  }
  return num.slice(0, i + 1);
};

const largestOddNumber2 = (num) => {
  let i = num.length - 1;
  while (i >= 0) {
    if (parseInt(num[i]) % 2 === 1) return num.slice(0, i + 1);
    i--;
  }
  return "";
};
