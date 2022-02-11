/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 计算总体时间 = 每堆香蕉花费的时间之和
  // 每堆香蕉花费的时间 = 香蕉的数量个数 / 速率
  const computedTime = (k) => {
    return piles.reduce((pre, cur) => {
      pre += Math.ceil(cur / k)
      return pre
    }, 0)
  }

  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    // 计算中间速率
    const mid = (left + (right - left) / 2) | 0

    if (computedTime(mid) > h) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
