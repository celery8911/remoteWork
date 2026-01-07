import assert from "assert";
import { ListNode, addTwoNumbers } from "./solution";

function buildList(values: number[]): ListNode | null {
  const dummyHead = new ListNode(0);
  let tail = dummyHead;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummyHead.next;
}

function listToArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}

const cases: Array<{ l1: number[]; l2: number[]; expected: number[] }> = [
  { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
  { l1: [0], l2: [0], expected: [0] },
  { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
];

for (const { l1, l2, expected } of cases) {
  const result = addTwoNumbers(buildList(l1), buildList(l2));
  assert.deepStrictEqual(listToArray(result), expected);
}

console.log("All Add Two Numbers test cases passed.");
