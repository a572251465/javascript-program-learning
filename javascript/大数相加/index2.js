function add(str1 = '', str2 = '') {
  const max = Math.max(str1.length, str2.length)

  str1 = str1.padStart(max, '0')
  str2 = str2.padStart(max, '0')

  let carry = 0,
    i = str1.length - 1,
    res = ''
  for (; i >= 0; i -= 1) {
    const a = +str1.charAt(i),
      b = +str2.charAt(i)

    const sum = a + b + carry,
      item = sum % 10
    carry = (sum / 10) | 0

    res = `${item}${res}`
  }

  if (carry > 0) res = `${carry}${res}`

  return res
}

console.log(add('9007199254740991', '1234567899999999999'))
// 1243575099254740990
// 1243575099254740990
