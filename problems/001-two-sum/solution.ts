/**
 * Returns indices of the two numbers that add up to the target.
 * Uses a hash map to achieve O(n) time by storing previously seen numbers.
 * Time Complexity: O(n) - iterate through the array once
 * Space Complexity: O(n) - hash map stores up to n elements
 */
export function twoSum(nums: number[], target: number): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    if (indexByValue.has(needed)) {
      return [indexByValue.get(needed)!, i];
    }

    indexByValue.set(current, i);
  }

  return [];
}
