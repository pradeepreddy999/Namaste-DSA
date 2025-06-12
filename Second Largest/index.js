const secondLargest = (array) => {
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (const el of array) {
    if (el > largest) {
      secLargest = largest;
      largest = el;
    } else if (el > secLargest && el !== largest) {
      secLargest = el;
    }
  }

  return secLargest;
};

console.log(secondLargest([-10, 59, 36, 20, 64, 76]));
console.log(secondLargest([-10, -10, -59, -36, -20, -64, -76]));
