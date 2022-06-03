function add(a = '', b = '') {
  // 获取最长字符串长度
  const maxLen = Math.max(a.length, b.length)
  // 如果长度不足，进行补位
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  // 相加进位剩余值
  let surplus = 0
  // 下标索引
  let index = maxLen - 1
  // 结果
  let result = ''

  while (index >= 0) {
    const ai = +a.charAt(index)
    const bi = +b.charAt(index)

    const sum = ai + bi + surplus
    surplus = (sum / 10) | 0
    result = (sum % 10) + result

    index--
  }

  if (surplus > 0) result = '1' + result
  return result
}

console.log(add('9007199254740991', '1234567899999999999'))

// 9007199254740991
// 1234567899999999999
// 1243575099254740990
// 1243575099254740990
