/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const start = new ListNode()
    start.next = head
    let fast = start
    let slow = start

    for (let i = 0; i < n; i++)
        fast = fast.next

    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return start.next
}
