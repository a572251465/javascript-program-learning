const add = (a, b) => {
  // 1. 先转换字符串
  a = a + ''
  b = b + ''

  // 获取最大个数
  const max = Math.max(a.length, b.length)
  a = a.padStart(max, '0')
  b = b.padStart(max, '0')

  let surplus = 0,
    sum = '',
    i = max - 1
  for (; i >= 0; i -= 1) {
    // 将两个值的最后一位相加
    const total = +a[i] + +b[i]
    // 获取个数位的值
    const discuss = total % 10

    // 个数位的值 + 上一次的进位结果
    const nums = surplus + +discuss

    surplus = 0
    if (total > 9) surplus += 1
    if (nums > 9) surplus += 1

    // 计算结果
    sum = (sum === '' ? nums % 10 : (nums % 10) + sum) + ''
  }
  return sum
}

console.log(add('9007199254740991', '1234567899999999999'))
// 1243575099254740990
// 1243575099254740990
