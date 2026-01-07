# LC-121 Best Time to Buy and Sell Stock

Single-pass TypeScript solution that tracks the minimum price seen so far and the best achievable profit.

## Notes
- `solution.ts` exports `maxProfit(prices)` returning the maximum profit from one transaction, or `0` when no profit is possible.
- Time: O(n); Space: O(1) with inline comments in the code.
- Tests in `solution.test.ts` cover empty input, single day, decreasing prices, and profitable scenarios.
- Run tests with `ts-node problems/121-best-time-to-buy-sell-stock/solution.test.ts` or your preferred TypeScript runner.
