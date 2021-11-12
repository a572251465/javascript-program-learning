/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  const stack = []

  let head1 = l1
  let head2 = l2
  let temp1 = null
  let temp2 = null
  while (head1 && head2) {
    const val1 = head1.val
    const val2 = head2.val

    if (val1 === val2) {
      temp1 = head1
      temp2 = head2
      head1 = head1.next
      head2 = head2.next
      temp1.next = null
      temp2.next = null
      stack.push(temp1, temp2)
    } else if (val1 > val2) {
      temp2 = head2
      head2 = head2.next
      temp2.next = null
      stack.push(temp2)
    } else {
      temp1 = head1
      head1 = head1.next
      temp1.next = null
      stack.push(temp1)
    }
  }

  let newHead = null
  let lastNode = null
  for (let i = 0; i < stack.length; i += 1) {
    if (newHead) {
      lastNode.next = stack[i]
      lastNode = lastNode.next
    } else {
      newHead = stack[i]
      lastNode = newHead
    }
  }
  lastNode = stack.pop()
  if (head1) lastNode.next = head1
  if (head2) lastNode.next = head2

  return newHead
}
