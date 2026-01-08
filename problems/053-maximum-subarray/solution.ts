/**
 * Finds the maximum subarray sum using Kadane's algorithm.
 * Tracks the best sum ending at the current position and the global maximum.
 */
export function maxSubArray(nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('Input array must contain at least one element');
  }

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    // Extend the current subarray or start a new one at the current element.
    currentSum = Math.max(value, currentSum + value);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Time complexity: O(n) where n is the length of nums (single pass).
// Space complexity: O(1) since only constant extra variables are used.
