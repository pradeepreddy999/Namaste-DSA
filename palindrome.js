const palindrome = (n) => {
  return n.toString() === n.toString().split("").reverse().join("");
};

// console.log(palindrome(121));
// console.log(palindrome(124));

const palindrome2 = (n) => {
  if (n === 0) return true;
  if (n < 0) return false;

  let originalNumber = n;
  let reverseNumber = 0;

  while (n > 0) {
    reverseNumber = 10 * reverseNumber + (n % 10);
    n = Math.floor(n / 10);
  }

  return originalNumber === reverseNumber;
};

// console.log(palindrome2(121));
// console.log(palindrome2(221));
// console.log(palindrome2(-121));
