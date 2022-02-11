/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const getAssignValueNums = (nums) => {
    let num = 0
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === '1') ++num
    }
    return num
  }

  let i = 0
  const result = []
  for (; i <= n; i += 1) result.push(getAssignValueNums(i.toString(2)))

  return result
}
