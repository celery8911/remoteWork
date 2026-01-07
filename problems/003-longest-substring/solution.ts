/**
 * Finds the length of the longest substring without repeating characters using sliding window.
 * Expands the window with a right pointer and moves the left pointer past duplicate characters.
 * Time Complexity: O(n) - each character index is visited at most twice.
 * Space Complexity: O(k) - k is the size of the character set stored in the map.
 */
export function lengthOfLongestSubstring(s: string): number {
  const lastSeenIndex = new Map<string, number>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (lastSeenIndex.has(char) && lastSeenIndex.get(char)! >= left) {
      left = lastSeenIndex.get(char)! + 1;
    }

    lastSeenIndex.set(char, right);
    const windowLength = right - left + 1;
    if (windowLength > maxLength) {
      maxLength = windowLength;
    }
  }

  return maxLength;
}
