class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(listA: ListNode | null, listB: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let carry = 0;
  let nodeA = listA;
  let nodeB = listB;

  while (nodeA !== null || nodeB !== null || carry !== 0) {
    const valueA = nodeA ? nodeA.val : 0;
    const valueB = nodeB ? nodeB.val : 0;
    const sum = valueA + valueB + carry;

    carry = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;

    nodeA = nodeA ? nodeA.next : null;
    nodeB = nodeB ? nodeB.next : null;
  }

  return dummyHead.next;
}

export { ListNode, addTwoNumbers };
