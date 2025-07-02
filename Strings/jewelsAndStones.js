// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have.
// Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive,
// so "a" is considered a different type of stone from "A".

// m - no of stones
// n - no of jewels

// time complexity O(m*n), space complexity O(1)
const numJewelsInStones = (jewels, stones) => {
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++)
      if (stones[i] === jewels[j]) {
        result++;
        break;
      }
  }

  return result;
};

// time complexity O(m+n), space complexity O(n)
const numJewelsInStones2 = (jewels, stones) => {
  let result = 0;
  let jSet = new Set();

  for (let i = 0; i < jewels.length; i++) jSet.add(jewels[i]);

  for (let j = 0; j < stones.length; j++) if (jSet.has(stones[j])) result++;

  return result;
};
