/**
 * Returns indices of the two numbers that add up to the target using a hash map.
 * Time Complexity: O(n) where n = nums.length
 * Space Complexity: O(n) for the hash map storing seen numbers
 */
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      const prevIndex = seen.get(complement)!;
      return [prevIndex, i];
    }
    seen.set(nums[i], i);
  }

  return [];
}
