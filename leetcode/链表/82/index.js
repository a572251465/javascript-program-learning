var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }

  const dummy = new ListNode(0, head)
  let curr = dummy
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val
      while (curr.next && curr.next.val === x) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }

  return dummy.next
}
