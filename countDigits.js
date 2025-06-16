const countDigits = (number) => {
  return Math.abs(number).toString().length;
};

console.log(countDigits(942));
console.log(countDigits(-942));
console.log(countDigits(0));

const countDigits2 = (number) => {
  if (number === 0) return 1;

  number = Math.abs(number);

  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
};

console.log(countDigits2(19387046));
console.log(countDigits2(-987654));
console.log(countDigits2(0));
