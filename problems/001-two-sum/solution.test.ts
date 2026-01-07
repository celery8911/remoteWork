import { twoSum } from './solution';

function assertArrayEqual(actual: number[], expected: number[], description: string) {
  const match = actual.length === expected.length && actual.every((val, idx) => val === expected[idx]);
  if (!match) {
    throw new Error(`${description} - expected ${expected.join(',')}, got ${actual.join(',')}`);
  }
}

// Basic test cases
assertArrayEqual(twoSum([2, 7, 11, 15], 9), [0, 1], 'Finds pair at start');
assertArrayEqual(twoSum([3, 2, 4], 6), [1, 2], 'Finds pair in middle');
assertArrayEqual(twoSum([3, 3], 6), [0, 1], 'Handles duplicate numbers');

console.log('All Two Sum tests passed.');
