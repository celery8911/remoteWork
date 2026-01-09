import assert from 'node:assert/strict';
import { ListNode, hasCycle } from './solution';

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

function buildCyclicList(values: number[], pos: number): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  const nodes: ListNode[] = values.map((value) => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i += 1) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

function runTest(name: string, headFactory: () => ListNode | null, expected: boolean): void {
  const result = hasCycle(headFactory());
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

// Edge cases
runTest('handles empty list', () => null, false);
runTest('handles single node without cycle', () => buildList([1]), false);
runTest('handles single node with self cycle', () => {
  const node = new ListNode(1);
  node.next = node;
  return node;
}, true);

// General cases
runTest('detects no cycle in multi-node list', () => buildList([1, 2, 3, 4]), false);
runTest('detects cycle pointing to head', () => buildCyclicList([1, 2, 3], 0), true);
runTest('detects cycle pointing to middle node', () => buildCyclicList([1, 2, 3, 4, 5], 2), true);
