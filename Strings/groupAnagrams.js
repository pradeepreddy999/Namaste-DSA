// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// n = number of strings in strs
// k = maximum length of a string in strs
// time complexity O(n * k log k), space complexity O(n * k)
const groupAnagrams = (strs) => {
  return Object.values(
    Object.groupBy(strs, (str) => str.split("").sort().join(""))
  );
};

// time complexity O(n * k), space complexity O(n * k)
const groupAnagrams2 = (strs) => {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    let freqArr = Array(26).fill(0);

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }

    let key = "";
    for (let k = 0; k < freqArr.length; k++) {
      key += "#" + freqArr[k];
    }

    if (!map[key]) map[key] = [s];
    else map[key].push(s);
  }

  return Object.values(map);
};
