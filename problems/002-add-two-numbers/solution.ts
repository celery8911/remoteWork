/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Adds two numbers represented by linked lists in reverse order.
 * Time Complexity: O(max(m, n)) where m and n are the lengths of the input lists
 * Space Complexity: O(max(m, n)) for the output list nodes
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  let firstPointer = l1;
  let secondPointer = l2;

  while (firstPointer !== null || secondPointer !== null || carry !== 0) {
    const firstValue = firstPointer ? firstPointer.val : 0;
    const secondValue = secondPointer ? secondPointer.val : 0;

    const sum = firstValue + secondValue + carry;
    carry = Math.floor(sum / 10);
    const newDigit = sum % 10;

    current.next = new ListNode(newDigit);
    current = current.next;

    firstPointer = firstPointer ? firstPointer.next : null;
    secondPointer = secondPointer ? secondPointer.next : null;
  }

  return dummyHead.next;
}
