# LC-001 Two Sum

TypeScript solution using a hash map to track needed complements in a single pass for O(n) time and O(n) space.

## Notes
- `solution.ts` exports `twoSum(nums, target)` returning the indices of the two numbers that sum to `target`, or `[]` if none exist.
- Tests in `solution.test.ts` include the corrected third case (`[1,5,3,6,8]`, `target=9`, expected `[0,4]`).
- Run tests with `ts-node problems/001-two-sum/solution.test.ts` or your preferred TypeScript runner.
