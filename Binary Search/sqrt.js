// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

const mySqrt = (x) => {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (middle * middle === x) return middle;
    else if (middle * middle < x) left = middle + 1;
    else right = middle - 1;
  }

  return right;
};
