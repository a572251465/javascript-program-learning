var deleteDuplicates = function (head) {
  if (!head || !head.next) return head

  // 1 1 2 3 3
  function next(newHead) {
    if (!newHead.next) return newHead

    const head = next(newHead.next)
    if (newHead.val === head.val) {
      newHead.next = head.next
    } else {
      newHead.next = head
    }
    return newHead
  }
  next(head)

  return head
}
