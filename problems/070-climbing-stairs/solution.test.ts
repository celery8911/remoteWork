import assert from 'node:assert/strict';
import { climbStairs } from './solution';

function runTest(name: string, n: number, expected: number): void {
  const result = climbStairs(n);
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('edge case n=1', 1, 1);
runTest('edge case n=2', 2, 2);
runTest('small n=3', 3, 3);
runTest('small n=4', 4, 5);
runTest('larger n=10', 10, 89);
