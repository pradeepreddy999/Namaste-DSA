// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

const balancedStringSplit = (s) => {
  let count = 0;
  let r = (l = 0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") l++;
    else r++;

    if (r === l) {
      count++;
      r = l = 0;
    }
  }
  return count;
};

const balancedStringSplit2 = (s) => {
  let count = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    balance += s[i] === "L" ? 1 : -1;
    if (balance === 0) count++;
  }
  return count;
};
