# Longest Substring Without Repeating Characters (LC-003)

- **Approach:** Sliding window with a map of last seen indices; move left pointer past duplicates.
- **Complexities:** Time O(n), Space O(k) where k is unique characters in the window.
- **Usage:** Run `ts-node solution.test.ts` (or compile with `tsc`) to verify sample cases.
