// 实现自己的迭代器
const each = function (arr = [], callback, _this) {
  let i = 0
  for (; ; i += 1) {
    if (i >= arr.length) break
    const value = arr[i], key = i, resultValue = callback.call(_this || value, value, key);
    if (!resultValue) break
  }
}

each([1, 2, 3], function (value, key) {
  console.log(value, key)
})
