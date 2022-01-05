/**
 * @author lihh
 * @description 判断是否是质数 - 约数只有1与其本身的数就叫质数
 * 我们知道，一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，
 * 一个大于等于sqrt(n)，据此，并不需要遍历到n-1，遍历到sqrt(n)即可
 * @param {*} nums 数值
 * @returns
 */
const isPrime = (nums) => {
  const temp = Math.sqrt(nums)
  let i = 2
  for (; i <= temp; i += 1) {
    if (nums % i === 0) return false
  }

  return true
}
