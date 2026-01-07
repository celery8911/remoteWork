import { twoSum } from "./solution";

const testCases: Array<{ numbers: number[]; target: number; expected: [number, number] }> = [
  { numbers: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { numbers: [3, 2, 4], target: 6, expected: [1, 2] },
  { numbers: [3, 3], target: 6, expected: [0, 1] },
];

for (const { numbers, target, expected } of testCases) {
  const result = twoSum(numbers, target);
  if (result[0] !== expected[0] || result[1] !== expected[1]) {
    throw new Error(
      `twoSum(${JSON.stringify(numbers)}, ${target}) expected ${expected} but got ${result}`,
    );
  }
}

console.log("All twoSum tests passed.");
