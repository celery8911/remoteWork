import { addTwoNumbers, ListNode } from './solution';

function buildList(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

function assertListEqual(actual: ListNode | null, expected: number[], description: string) {
  const actualArray = listToArray(actual);
  const expectedString = expected.join(',');
  const actualString = actualArray.join(',');
  if (actualString !== expectedString) {
    throw new Error(`${description} - expected [${expectedString}], got [${actualString}]`);
  }
}

// 342 + 465 = 807
assertListEqual(addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4])), [7, 0, 8], 'Adds two equal-length numbers');

// 0 + 0 = 0
assertListEqual(addTwoNumbers(buildList([0]), buildList([0])), [0], 'Handles zero inputs');

// 999 + 1 = 1000
assertListEqual(addTwoNumbers(buildList([9, 9, 9]), buildList([1])), [0, 0, 0, 1], 'Propagates carry through list');

console.log('All Add Two Numbers tests passed.');
