import assert from "assert";
import { twoSum } from "./solution";

const cases: Array<{ nums: number[]; target: number; expected: number[] }> = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
];

for (const { nums, target, expected } of cases) {
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, expected);
}

console.log("All Two Sum test cases passed.");
