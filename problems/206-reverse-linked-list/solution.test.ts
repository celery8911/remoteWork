import assert from 'node:assert/strict';
import { ListNode, reverseList } from './solution';

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

function runTest(name: string, input: number[], expected: number[]): void {
  const head = buildList(input);
  const reversed = reverseList(head);
  const result = toArray(reversed);
  assert.deepStrictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

// Edge cases
runTest('handles empty list', [], []);
runTest('handles single node', [42], [42]);
runTest('reverses two nodes', [1, 2], [2, 1]);

// General case
runTest('reverses longer list', [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
