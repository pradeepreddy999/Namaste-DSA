// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  for (let x = 0; x < strs[0].length; x++) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (x === strs[i].length || ch !== strs[i][x]) {
        return strs[0].slice(0, x);
      }
    }
  }
  return strs[0];
};
