export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

/**
 * Adds two numbers represented by linked lists where each node contains a single digit.
 * Digits are stored in reverse order, so the 1's digit is at the head of the list.
 * Time Complexity: O(max(m, n)) where m and n are list lengths; iterates through both lists once.
 * Space Complexity: O(max(m, n)) for the output list.
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let carry = 0;
  let firstPointer = l1;
  let secondPointer = l2;

  while (firstPointer !== null || secondPointer !== null || carry !== 0) {
    const firstValue = firstPointer ? firstPointer.val : 0;
    const secondValue = secondPointer ? secondPointer.val : 0;
    const total = firstValue + secondValue + carry;

    carry = Math.floor(total / 10);
    currentNode.next = new ListNode(total % 10);
    currentNode = currentNode.next;

    firstPointer = firstPointer ? firstPointer.next : null;
    secondPointer = secondPointer ? secondPointer.next : null;
  }

  return dummyHead.next;
}
