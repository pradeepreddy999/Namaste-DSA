// Given two strings needle and haystack,
// return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

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
