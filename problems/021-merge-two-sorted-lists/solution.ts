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
 * Merges two sorted linked lists into one sorted list using a dummy node.
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy; // Tail always points to the last node in the merged list.

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // Attach any remaining nodes from either list.
  tail.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

// Time complexity: O(n + m) where n and m are the lengths of list1 and list2.
// Space complexity: O(1) extra space since merging is done in-place.
