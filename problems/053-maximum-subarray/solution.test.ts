import assert from 'node:assert/strict';
import { maxSubArray } from './solution';

function runTest(name: string, nums: number[], expected: number): void {
  const result = maxSubArray(nums);
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest(
  'handles mixed positive and negative values',
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  6
);

runTest('all negative values', [-4, -2, -7, -3], -2);

runTest('single element array', [5], 5);

runTest('captures largest subarray later in array', [5, 4, -1, 7, 8], 23);
