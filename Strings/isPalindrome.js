// A phrase is a palindrome if, after converting all
// uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
  let cleaned = s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("");
  let cleanedCopy = [...cleaned];

  const n = cleaned.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = cleaned[i];
    cleaned[i] = cleaned[n - i - 1];
    cleaned[n - i - 1] = temp;
  }

  return cleaned.join("") === cleanedCopy.join("");
};

const isPalindrome2 = (s) => {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() <= "9".charCodeAt())
    ) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
};

const isPalindrome3 = (s) => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
