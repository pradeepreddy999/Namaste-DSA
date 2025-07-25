// Given n non-negative integers representing an elevation map
// where the width of each bar is 1,
// compute how much water it can trap after raining.

const trap = (arr) => {
  const n = arr.length;

  let maxL = [],
    maxR = [];
  maxL[0] = arr[0];
  maxR[n - 1] = arr[n - 1];

  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], arr[i]);
    maxR[n - 1 - i] = Math.max(arr[n - 1 - i], maxR[n - i]);
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    const waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
    ans = ans + Math.max(waterTrapped, 0);
  }

  return ans;
};
