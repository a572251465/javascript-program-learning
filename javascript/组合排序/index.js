function comSort(str = '') {
  const keys = [],
    values = [],
    arr = str.split('')

  arr.forEach((item) => {
    if (keys.length === 0) {
      keys.push(item)
      values.push(1)
    } else {
      const localIndex = keys.length - 1
      const preKey = keys[localIndex]
      if (item !== preKey) {
        keys.push(item)
        values.push(1)
      } else {
        const value = values[localIndex]
        values[localIndex] = value + 1
      }
    }
  })

  return values.reduce((pre, cur, index) => {
    pre = `${pre}${cur}${keys[index]}`
    return pre
  }, '')
}

console.log(comSort('aaabbccaabc'))
