// You are given a string s and an integer k.
// You can choose any character of the string and
// change it to any other uppercase English character.
// You can perform this operation at most k times.

// Return the length of the longest substring containing
// the same letter you can get after performing the above operations.

const isWindowValid = (arr, k) => {
  let totalCount = (maxCount = 0);

  for (let i = 0; i < 26; i++) {
    totalCount += arr[i];
    maxCount = Math.max(maxCount, arr[i]);
  }

  return totalCount - maxCount <= k;
};

const characterReplacement = (s, k) => {
  let i = (j = 0);
  let maxLen = 0;
  let arr = Array(26).fill(0);
  arr[s.charCodeAt(0) - 65] = 1;

  while (j < s.length) {
    if (isWindowValid(arr, k)) {
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
      arr[s.charCodeAt(j) - 65]++;
    } else {
      arr[s.charCodeAt(i) - 65]--;
      i++;
    }
  }

  return maxLen;
};
