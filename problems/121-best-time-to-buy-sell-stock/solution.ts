/**
 * Calculates the maximum profit from a single buy-sell transaction.
 * Single-pass scan tracking the minimum price seen so far and the best profit.
 *
 * Time Complexity: O(n) where n is the number of price entries.
 * Space Complexity: O(1) constant extra space.
 */
export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let bestProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
      continue;
    }

    const profit = price - minPrice;
    if (profit > bestProfit) {
      bestProfit = profit;
    }
  }

  return bestProfit;
}
