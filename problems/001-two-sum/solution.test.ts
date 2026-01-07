import assert from 'node:assert/strict';
import { twoSum } from './solution';

function runTest(
  name: string,
  nums: number[],
  target: number,
  expected: number[]
): void {
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('finds pair at start', [2, 7, 11, 15], 9, [0, 1]);
runTest('handles duplicates correctly', [3, 2, 4], 6, [1, 2]);

// Corrected expected indices per task instructions.
runTest('corrected test case', [1, 5, 3, 6, 8], 9, [0, 4]);

runTest('returns empty when no pair exists', [1, 2, 3], 7, []);
