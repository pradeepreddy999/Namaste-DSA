// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days
// you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible,
// keep answer[i] == 0 instead.

// time complexity O(n), space complexity O(n)
const dailyTemperatures = (temperatures) => {
  let stack = [];

  const n = temperatures.length;
  let result = Array(n).fill(0);

  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (temperatures[top] > temperatures[i]) {
        result[i] = top - i;
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(i);
  }

  return result;
};
