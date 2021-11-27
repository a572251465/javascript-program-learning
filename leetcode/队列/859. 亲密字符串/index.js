var buddyStrings = function(a, b) {
  if (a.length < 2 || b.length < 2 || a.length !== b.length) return false

  // abab  abab
  if (a === b && a.length > new Set(a).size) return true

  const stack = []
  for (let i = 0 ; i < a.length; i ++) {
    if (a[i] !== b[i]) {
      stack.push(a[i], b[i])
    }
    if (stack.length > 4) return false
  }

  return stack.length === 4 && stack[0] === stack[3] && stack[1] === stack[2]
}

buddyStrings('ab', 'ba')
