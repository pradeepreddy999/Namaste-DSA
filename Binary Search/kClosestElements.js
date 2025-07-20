// Given a sorted integer array arr, two integers k and x,
// return the k closest integers to x in the array.
// The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

const findClosestElements = (arr, k, x) => {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (arr[m + k] - x < x - arr[m]) l = m + 1;
    else r = m;
  }

  // return arr.slice(l, l + k);
  let result = [];
  for (let i = l; i < l + k; i++) {
    result.push(arr[i]);
  }
  return result;
};
