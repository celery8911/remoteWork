# LC-020 Valid Parentheses

TypeScript stack-based solution checking `()`, `{}`, and `[]` in one pass for O(n) time.

## Notes
- `solution.ts` exports `isValid(s)` returning `true` when brackets are properly closed and nested, otherwise `false`.
- Tests in `solution.test.ts` cover valid mixes, nesting, mismatch ordering, extra closings, and the empty string edge case.
- Run tests with `ts-node problems/020-valid-parentheses/solution.test.ts` or your preferred TypeScript runner.
