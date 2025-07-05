// Given a string s and an integer k,
// reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.

const reverseStr = (s, k) => {
  s = s.split("");
  for (let x = 0; x < s.length; x = x + 2 * k) {
    const n = Math.min(k, s.length - x);
    for (let i = 0; i < Math.floor(n / 2); i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - i - 1];
      s[x + n - i - 1] = temp;
    }
  }
  return s.join("");
};
