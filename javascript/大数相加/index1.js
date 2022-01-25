function add(str1 = '', str2 = '') {
  let max = Math.max(str1.length, str2.length)

  str1 = str1.padStart(max, '0')
  str2 = str2.padStart(max, '0')

  let surplus = 0
  let res = ''

  max--
  while (max >= 0) {
    const a = +str1.charAt(max)
    const b = +str2.charAt(max)
    let sum = a + b + surplus

    surplus = (sum / 10) | 0
    sum = sum % 10

    res = `${sum}${res}`
    max--
  }

  if (surplus !== 0) res = `${surplus}${res}`

  return res
}

console.log(add('9007199254740991', '1234567899999999999'))
// 1243575099254740990
// 1243575099254740990
