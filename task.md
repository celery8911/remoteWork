# LeetCode AI Task Board

## Rules
- Codex must complete ALL tasks with status TODO
- Codex must NOT touch tasks marked DONE
- Claude is the only one allowed to modify this file

---

## Tasks

### LC-001 Two Sum
- Status: TODO
- Path: problems/001-two-sum
- Requirements:
  - TypeScript
  - O(n) solution using hash map
  - Include time & space complexity comments
  - Add at least 3 test cases
- **FIX REQUIRED**: Test case #3 has incorrect expected value
  - Current: nums=[1,5,3,6,8], target=9, expected=[1,2]
  - Issue: nums[1] + nums[2] = 5 + 3 = 8 ≠ 9
  - Correct: expected should be [0,4] (1 + 8 = 9) or [2,3] (3 + 6 = 9)
