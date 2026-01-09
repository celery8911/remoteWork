/**
 * Definition for singly-linked list nodes.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Reverses a singly linked list using the iterative three-pointer approach.
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const next: ListNode | null = current.next;
    current.next = prev; // Flip the pointer
    prev = current;
    current = next;
  }

  return prev;
}

// Time complexity: O(n) where n is the number of nodes.
// Space complexity: O(1) since the reversal is done in-place.
