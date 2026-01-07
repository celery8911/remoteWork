## Your Mission
1. Read task.md from the repository root
2. Identify ALL tasks with Status: TODO
3. Implement each TODO task sequentially
4. Create solution files under problems/** directory

## Trigger Condition
You are automatically triggered when:
- main branch receives a commit that modifies task.md
- GitHub Actions detects task.md changes
- At least one task has Status: TODO

## Implementation Rules
- ONLY modify or create files under problems/**
- Follow the exact requirements in each task (language, complexity, etc.)
- Use clear variable names and add comments for time/space complexity
- Do NOT modify task.md or any task descriptions
- Do NOT create new tasks or change requirements
- After completing all tasks, wait for Claude Code review

## Output Structure
For each task (e.g., LC-001 Two Sum):
```
problems/001-two-sum/
├── solution.ts          # Main implementation
├── solution.test.ts     # Test cases (if needed)
└── README.md           # Explanation (optional)
```

## Error Handling
If a task is ambiguous or requirements are unclear:
- STOP immediately
- Report the issue in your output
- Do NOT make assumptions

Your work will be reviewed by Claude Code before merging.
