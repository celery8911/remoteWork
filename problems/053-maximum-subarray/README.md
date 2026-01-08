# LC-053 Maximum Subarray

TypeScript implementation of Kadane's algorithm to find the maximum possible sum of a contiguous subarray.

## Notes
- `solution.ts` exports `maxSubArray(nums)` which returns the best subarray sum in O(n) time and O(1) space.
- The algorithm tracks a running sum ending at each position and a global maximum across the pass.
- Tests in `solution.test.ts` cover mixed values, all negatives, a single-element array, and a case where the optimal subarray appears later.
- Run tests with `ts-node problems/053-maximum-subarray/solution.test.ts` or another TypeScript runner.
