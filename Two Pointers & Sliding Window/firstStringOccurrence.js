// Given two strings needle and haystack,
// return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// time complexity O(n * m) can be O(n * n) in worst case when n === m, space complexity O(1)
const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let noOfMatches = 0;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) noOfMatches++;
    }
    if (noOfMatches === needle.length) return i;
  }
  return -1;
};

// time complexity O(n), space complexity O(m) can be useful only when has common prefix and suffix

const strStr2 = (haystack, needle) => {
  let n = haystack.length;
  let m = needle.length;
  let lps = [0];
  let i = 0;
  let j = 1;
  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      ++i;
      ++j;
    } else {
      if (i == 0) {
        lps[j] = 0;
        ++j;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = j = 0;
  while (i < n) {
    if (haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      if (j == 0) {
        ++i;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === m) {
      return i - m;
    }
  }
  return -1;
};
