import { lengthOfLongestSubstring } from './solution';

function assertEqual(actual: number, expected: number, description: string) {
  if (actual !== expected) {
    throw new Error(`${description} - expected ${expected}, got ${actual}`);
  }
}

assertEqual(lengthOfLongestSubstring('abcabcbb'), 3, 'Handles repeating pattern');
assertEqual(lengthOfLongestSubstring('bbbbb'), 1, 'Handles all same characters');
assertEqual(lengthOfLongestSubstring('pwwkew'), 3, 'Handles overlaps correctly');
assertEqual(lengthOfLongestSubstring(''), 0, 'Handles empty string');
assertEqual(lengthOfLongestSubstring('dvdf'), 3, 'Moves left pointer past previous occurrence');

console.log('All Longest Substring tests passed.');
