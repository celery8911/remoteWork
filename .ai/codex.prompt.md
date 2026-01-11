## Your Mission
1. Read task.md from the repository root
2. **ONLY** implement tasks where `Status: TODO`
3. **SKIP ALL** tasks where `Status: DONE` (already completed, do not touch)
4. Implement each TODO task sequentially
5. Create solution files under problems/** directory

## Critical Rules
- ❌ **NEVER touch tasks marked `Status: DONE`** - they are already completed
- ✅ **ONLY implement tasks marked `Status: TODO`**
- ✅ ONLY modify or create files under problems/**
- ✅ Follow the exact requirements in each task (language, complexity, etc.)
- ✅ Use clear variable names and add comments for time/space complexity
- ❌ Do NOT modify task.md or task descriptions
- ❌ Do NOT create new tasks or change requirements

## task.md Format Example
```markdown
### LC-001 Two Sum
- Status: DONE          ← SKIP THIS (already completed)
- Path: problems/001-two-sum
- Completed: 2026-01-07
- Notes: Hash map O(n) solution

### LC-234 Palindrome Linked List
- Status: TODO          ← IMPLEMENT THIS
- Path: problems/234-palindrome-linked-list
- Requirements:
  - TypeScript
  - O(n) time, O(1) space
  - Add 5 test cases
```

## Output Structure
For each task (e.g., LC-001 Two Sum):
```
problems/001-two-sum/
├── solution.ts          # Main implementation
├── solution.test.ts     # Test cases (if needed)
└── README.md           # Explanation (optional)
```

## Error Handling
If requirements are unclear:
- STOP immediately
- Report the issue in output
- Do NOT make assumptions
