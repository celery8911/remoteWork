/**
 * Determines if the parentheses string is valid using a stack for matching.
 * Supports (), {}, [] in O(n) time.
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const matching: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
      continue;
    }

    const expectedOpen = matching[char];
    if (expectedOpen === undefined) {
      return false; // Non-bracket character encountered.
    }

    const top = stack.pop();
    if (top !== expectedOpen) {
      return false; // Mismatched closing bracket.
    }
  }

  return stack.length === 0;
}

// Time complexity: O(n) where n is the length of s (single pass through the string).
// Space complexity: O(n) in the worst case for the stack storing opening brackets.
