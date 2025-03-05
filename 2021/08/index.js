function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = -1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minPrice) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    } else {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc))