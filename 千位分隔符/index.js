const separator = (str) => {
  str += ''
  const target = str
  // 1. 如果值 <= 3的话 直接返回
  if (str.length <= 3) return str
  // 2. 进行字符串反转
  str = str.split('').reverse().join('')

  const sums = []
  // 3. 通过replace 来获取最后满足三位的值
  str.replace(/[0-9]{3}/gi, function (e) {
    sums.push(e)
  })
  // 4. 将剩余的值直接添加进来
  sums.unshift(target.slice(0, str.length % 3))

  return sums.join(',')
}

console.log(separator('12345678543'))
console.log(separator('123'))
console.log(separator('12323'))
