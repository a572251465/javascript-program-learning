var deleteDuplicates = function (head) {
  if (!head || head.next === null) return head

  let p = head
  while(p && p.next) {
    const val = p.val
    const valNext = p.next.val

    if (val === valNext) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}
