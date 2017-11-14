/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
    if (!head || !head.next || !head.next.next)
        return false

    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow)
            return true
    }

    return false
}
