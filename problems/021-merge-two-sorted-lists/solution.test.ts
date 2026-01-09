import assert from 'node:assert/strict';
import { ListNode, mergeTwoLists } from './solution';

function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node = new ListNode(value);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }

  return head;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

function runTest(name: string, listA: number[], listB: number[], expected: number[]): void {
  const mergedHead = mergeTwoLists(buildList(listA), buildList(listB));
  const result = toArray(mergedHead);
  assert.deepStrictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

// Edge cases
runTest('both lists empty', [], [], []);
runTest('first list empty', [], [1, 3, 4], [1, 3, 4]);

// Equal lengths
runTest('equal length lists', [1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]);

// Different lengths
runTest('different length lists', [-10, -3, 0, 5], [-2, 2], [-10, -3, -2, 0, 2, 5]);
