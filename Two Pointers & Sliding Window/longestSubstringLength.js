// Given a string s,
// find the length of the longest substring without duplicate characters.

const lengthOfLongestSubstring = (s) => {
  let i = 0,
    j = 0,
    maxLen = 0;
  let map = new Map();

  while (j < s.length) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1;
    }
    map.set(s[j], j);
    maxLen = Math.max(maxLen, j - i + 1);

    j++;
  }

  return maxLen;
};
