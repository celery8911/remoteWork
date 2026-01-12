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

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

/**
 * Determines whether a singly linked list forms a palindrome.
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    slow = slow!.next;
  }

  let secondHalf = reverseList(slow);
  let firstHalf: ListNode | null = head;

  while (secondHalf !== null) {
    if (firstHalf!.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}

// Time complexity: O(n) where n is the number of nodes.
// Space complexity: O(1) extra space since we reverse in-place.
