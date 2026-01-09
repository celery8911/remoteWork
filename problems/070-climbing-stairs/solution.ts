/**
 * Computes the number of distinct ways to climb n stairs when you can take 1 or 2 steps.
 * Uses an iterative dynamic programming approach with two variables for O(1) space.
 */
export function climbStairs(n: number): number {
  if (n <= 2) {
    return n; // Base cases: 1 way for n=1, 2 ways for n=2.
  }

  let waysOneStepBefore = 2; // Ways to reach step i-1.
  let waysTwoStepsBefore = 1; // Ways to reach step i-2.

  for (let step = 3; step <= n; step++) {
    const currentWays = waysOneStepBefore + waysTwoStepsBefore;
    waysTwoStepsBefore = waysOneStepBefore;
    waysOneStepBefore = currentWays;
  }

  return waysOneStepBefore;
}

// Time complexity: O(n) where n is the number of steps (single pass).
// Space complexity: O(1) using only two variables for state.
