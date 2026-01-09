# LeetCode AI Task Board

## Rules
- Codex must complete ALL tasks with status TODO
- Codex must NOT touch tasks marked DONE
- Claude is the only one allowed to modify this file

---

## Tasks

### LC-001 Two Sum
- Status: DONE
- Path: problems/001-two-sum
- Completed: 2026-01-07
- Notes: Hash map O(n) solution with corrected test cases

---

### LC-020 Valid Parentheses
- Status: DONE
- Path: problems/020-valid-parentheses
- Completed: 2026-01-07
- Notes: Stack-based O(n) solution with 5 comprehensive test cases

---

### LC-121 Best Time to Buy and Sell Stock
- Status: DONE
- Path: problems/121-best-time-to-buy-sell-stock
- Completed: 2026-01-07
- Notes: Single-pass O(n) solution with min-price tracking, 5 comprehensive test cases covering all edge cases

---

### LC-053 Maximum Subarray
- Status: DONE
- Path: problems/053-maximum-subarray
- Completed: 2026-01-08
- Notes: Kadane's algorithm O(n) solution with proper edge case handling, 4 comprehensive test cases

---

### LC-070 Climbing Stairs
- Status: DONE
- Path: problems/070-climbing-stairs
- Completed: 2026-01-09
- Notes: Fibonacci-based DP solution with O(1) space optimization, 5 test cases with verified edge cases

---

### LC-206 Reverse Linked List
- Status: DONE
- Path: problems/206-reverse-linked-list
- Completed: 2026-01-09
- Notes: Three-pointer iterative reversal with O(n) time and O(1) space, 4 comprehensive test cases covering all edge cases

---

### LC-141 Linked List Cycle
- Status: DONE
- Path: problems/141-linked-list-cycle
- Completed: 2026-01-09
- Notes: Floyd's cycle detection with fast/slow pointers, O(n) time and O(1) space, 6 comprehensive test cases covering all edge cases

---

### LC-021 Merge Two Sorted Lists
- Status: TODO
- Path: problems/021-merge-two-sorted-lists
- Requirements:
  - TypeScript
  - Iterative or recursive merge of two sorted linked lists
  - O(n+m) time, O(1) space for iterative (O(n+m) space for recursive due to call stack)
  - Problem: Merge two sorted linked lists and return it as a sorted list
  - Reuse or define ListNode class/interface
  - Use dummy node technique for clean implementation
  - Include time & space complexity comments
  - Add at least 4 test cases (including edge cases: both empty, one empty, equal length, different lengths)
