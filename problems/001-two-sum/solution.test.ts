import assert from 'node:assert';
import twoSum from './solution';

type TestCase = {
  name: string;
  nums: number[];
  target: number;
  expected: number[];
};

const tests: TestCase[] = [
  {
    name: 'returns first simple pair',
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
  },
  {
    name: 'handles duplicates correctly',
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
  },
  {
    name: 'finds pair in middle of array',
    nums: [1, 5, 3, 6, 8],
    target: 9,
    expected: [1, 2],
  },
  {
    name: 'works with negative numbers',
    nums: [-4, -1, 0, 3, 10],
    target: -1,
    expected: [1, 2],
  },
];

tests.forEach(({ name, nums, target, expected }) => {
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, expected);
  console.log(`✓ ${name}`);
});
