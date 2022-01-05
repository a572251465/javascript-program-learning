/**
 * @author lihh
 * @description 判断是否是质数 - 约数只有1与其本身的数就叫质数
 * @param {*} nums 数值
 * @returns 
 */
const isPrime = (nums) => {
  const temp = nums - 1
  let i = 2
  for (; i <= temp; i += 1) {
    if (nums % i === 0) return false
  }

  return true
}
