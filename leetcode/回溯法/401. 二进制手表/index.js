/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const result = []
  const target = [12, 60]
  function bt(arr = [], index = 0, nextRes = []) {
    if (nextRes.length === 2) {
      const a = nextRes[0]
      const b = nextRes[1]

      if (a.toString(2).replace(/0/gi, '').length + b.toString(2).replace(/0/gi, '').length === turnedOn) {
        result.push(`${a}:${(b + '').padStart(2, '0')}`)
      }
      return
    }
    const max = arr[index]

    for (let i = 0; i < max; i += 1) {
      nextRes.push(i)
      bt(arr, index + 1, nextRes)
      nextRes.pop()
    }
  }

  bt(target, 0, [])
  return result
}
