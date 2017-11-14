/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    if (!head) return null

    const first = new ListNode(head.val)
    const second = first.next

    const _reverseList = (prev, curr) => {
        if (!curr) return prev

        const next = curr.next
        const node = new ListNode(curr.val)
        node.next = prev

        return _reverseList(node, next)
    }

    return _reverseList(first, second)
}
