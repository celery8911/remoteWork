/**
 * Returns indices of the two numbers that add up to the target.
 * Uses a hash map to track complements for O(n) time.
 */
export function twoSum(nums: number[], target: number): number[] {
  const complementIndex = new Map<number, number>(); // complement value -> index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const matchIndex = complementIndex.get(current);

    if (matchIndex !== undefined) {
      return [matchIndex, i];
    }

    complementIndex.set(target - current, i);
  }

  return []; // No pair found
}

// Time complexity: O(n) where n is the length of nums.
// Space complexity: O(n) for the hash map storing complements.
