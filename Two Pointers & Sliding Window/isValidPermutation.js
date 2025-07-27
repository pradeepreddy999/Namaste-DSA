// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

const checkInclusion = (s1, s2) => {
  let hashW = Array(26).fill(0);
  let hashS = Array(26).fill(0);
  const window_length = s1.length;

  for (let i = 0; i < window_length; i++) {
    hashW[s2.charCodeAt(i) - 97]++;
    hashS[s1.charCodeAt(i) - 97]++;
  }

  let i = 0;
  let j = window_length - 1;

  while (j < s2.length) {
    if (isValidPermutation(hashW, hashS)) return true;
    else {
      hashW[s2.charCodeAt(i) - 97]--;
      i++;
      j++;
      hashW[s2.charCodeAt(j) - 97]++;
    }
  }
  return false;
};

const isValidPermutation = function (hashW, hashS) {
  for (let i = 0; i < 26; i++) {
    if (hashW[i] !== hashS[i]) return false;
  }
  return true;
};
