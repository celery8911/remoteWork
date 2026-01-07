import assert from 'node:assert/strict';
import { maxProfit } from './solution';

function runTest(name: string, prices: number[], expected: number): void {
  const result = maxProfit(prices);
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('empty price list yields zero profit', [], 0);
runTest('single day no transaction possible', [7], 0);
runTest('monotonically decreasing prices', [9, 8, 5, 3, 1], 0);
runTest('simple increasing prices', [1, 2, 3, 4], 3);
runTest('valley then peak mid-sequence', [7, 1, 5, 3, 6, 4], 5);
