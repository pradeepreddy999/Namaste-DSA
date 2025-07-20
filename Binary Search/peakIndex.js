// You are given an integer mountain array arr of length n
// where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

const peakIndexInMountainArray = (arr) => {
  let s = 0,
    e = arr.length - 1;
  while (s < e) {
    const m = s + Math.floor((e - s) / 2);
    const next = m + 1;

    if (arr[m] > arr[next]) e = m;
    else s = m + 1;
  }
  return s;
};
