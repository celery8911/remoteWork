import assert from 'node:assert/strict';
import { ListNode, isPalindrome } from './solution';

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

function runTest(name: string, values: number[], expected: boolean): void {
  const head = buildList(values);
  const result = isPalindrome(head);
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('handles empty list', [], true);
runTest('handles single node', [7], true);
runTest('handles two equal nodes', [4, 4], true);
runTest('handles two different nodes', [4, 5], false);
runTest('handles odd length palindrome', [1, 2, 3, 2, 1], true);
runTest('handles even length palindrome', [1, 2, 2, 1], true);
runTest('handles non-palindrome list', [1, 2, 3, 4], false);
