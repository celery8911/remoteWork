/**
 * Returns indices of the two numbers that add up to the target.
 * Uses a hash map to store previously seen values for O(1) lookup.
 *
 * Time complexity: O(n) - single pass through the array.
 * Space complexity: O(n) - hash map storing at most n elements.
 */
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      // Complement previously seen; return pair of indices.
      return [seen.get(complement) as number, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

export default twoSum;
