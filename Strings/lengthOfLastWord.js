// time complexity O(n) and space complexity O(n)
const lengthOfLastWord = (s) => s.trim().split(" ")?.at(-1).length;

// time complexity O(n) and space complexity O(1)
const lengthOfLastWord2 = (s) => {
  let i = s.length - 1;

  while (i > -1 && s[i] === " ") i--;

  let count = 0;
  while (i > -1 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};

// time complexity O(n) and space complexity O(1) - better approach
const lengthOfLastWord3 = (s) => {
  let i = s.length - 1;

  let count = 0;
  while (i > -1) {
    if (count > 0 && s[i] === " ") break;
    else if (s[i] !== " ") count++;
    i--;
  }

  return count;
};
