// Given two strings s and t,
// return true if t is an anagram of s, and false otherwise.

// time complexity O(nlogn), space complexity O(n)
const isAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// time complexity O(n), space complexity O(1) since max number of character are constant (26)
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 1;
    else map[s[i]] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] === 0) return false;
    else map[t[i]] -= 1;
  }

  return true;
};
