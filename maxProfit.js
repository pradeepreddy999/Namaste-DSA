// Best day to buy and sell a stock so that maximum profit is acheived.

// brute force O(n^2) time complexity
const maxProfit = (prices) => {
  let profit = 0;
  const days = prices.length;
  for (let i = 0; i < days; i++) {
    for (let j = i + 1; j < days; j++) {
      if (prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// better approach with O(n) time complexity
const maxProfit2 = function (prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }

  return profit;
};
