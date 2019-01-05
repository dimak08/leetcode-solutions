//  * Definition for singly-linked list.
export function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  let remains = 0;
  let node1 = l1;
  let node2 = l2;
  let resultList = null;
  let resultListPointer = null;

  while (node1 || node2 || remains) {
    const value = remains + ((node1 && node1.val) || 0) + ((node2 && node2.val) || 0);
    remains = ~~(value / 10);

    if (!resultList) {
      resultList = new ListNode(value % 10);
      resultListPointer = resultList;
    } else {
      resultListPointer.next = new ListNode(value % 10);
      resultListPointer = resultListPointer.next;
    }

    [node1, node2] = [node1 && node1.next, node2 && node2.next];
  }

  return resultList;
}
