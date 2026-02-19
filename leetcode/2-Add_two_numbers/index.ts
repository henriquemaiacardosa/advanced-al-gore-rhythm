/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;

    const sum = x + y + carry;

    carry = Math.trunc(sum / 10);
    tail.next = new ListNode(sum % 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    tail = tail.next;
  }

  if (carry !== 0) {
    let newNode = new ListNode();
    newNode.val = carry;
    tail.next = newNode;
  }

  return dummy.next;
}
