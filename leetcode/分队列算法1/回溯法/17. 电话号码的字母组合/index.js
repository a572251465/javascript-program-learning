/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  digits = digits.replace(/1/gi, '')
  if (digits === '') return []
  const mapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const arr = digits.split('').map((item) => mapping[item].split(''))
  const result = []
  function bt(arr = [], index = 0, res = []) {
    if (arr.length === res.length) {
      result.push(res.join(''))
      return
    }

    const values = arr[index]
    for (let i = 0; i < values.length; i += 1) {
      const item = values[i]
      res.push(item)
      bt(arr, index + 1, res)
      res.pop()
    }
  }
  bt(arr, 0, [])
  return result
}

console.log(letterCombinations('23'))