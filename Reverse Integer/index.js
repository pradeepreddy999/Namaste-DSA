const reverseInteger = (n) => {
  if (n === 0) return 0;

  let originalNumber = n;
  n = Math.abs(n);
  let reverseNumber = 0;

  while (n > 0) {
    reverseNumber = 10 * reverseNumber + (n % 10);
    n = Math.floor(n / 10);
  }

  reverseNumber = originalNumber < 0 ? -reverseNumber : reverseNumber;

  const pow2to31 = Math.pow(2, 31); // reversed number should be 32 bit signed integer.

  return reverseNumber < -pow2to31 || reverseNumber > pow2to31 - 1
    ? 0
    : reverseNumber;
};

console.log(reverseInteger(121));
console.log(reverseInteger(221));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
