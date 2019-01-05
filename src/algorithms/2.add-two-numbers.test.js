import { expect } from 'chai';
import { ListNode, addTwoNumbers } from './2.add-two-numbers';

describe('2. Add Two Numbers', () => {
  it('(2 -> 4 -> 3) + (5 -> 6 -> 4) should be (7 -> 0 -> 8)', () => {
    const list1 = new ListNode(2);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(3);

    const list2 = new ListNode(5);
    list2.next = new ListNode(6);
    list2.next.next = new ListNode(4);

    const result = addTwoNumbers(list1, list2);

    expect(result.val).to.be.equal(7);
    expect(result.next.val).to.be.equal(0);
    expect(result.next.next.val).to.be.equal(8);
  });

  it('(1 -> 1 -> 1) + (2 -> 2 -> 2) should be (3 -> 3 -> 3)', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(1);
    list1.next.next = new ListNode(1);

    const list2 = new ListNode(2);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(2);

    const result = addTwoNumbers(list1, list2);

    expect(result.val).to.be.equal(3);
    expect(result.next.val).to.be.equal(3);
    expect(result.next.next.val).to.be.equal(3);
  });

  it('(5) + (5) should be (0 -> 1)', () => {
    const list1 = new ListNode(5);

    const list2 = new ListNode(5);

    const result = addTwoNumbers(list1, list2);

    expect(result.val).to.be.equal(0);
    expect(result.next.val).to.be.equal(1);
  });

  it('(1 -> 8) + (0) should be (1 -> 8)', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(8);

    const list2 = new ListNode(0);

    const result = addTwoNumbers(list1, list2);

    expect(result.val).to.be.equal(1);
    expect(result.next.val).to.be.equal(8);
  });
});
